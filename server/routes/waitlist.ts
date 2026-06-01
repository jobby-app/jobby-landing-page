import { Router } from "express";
import { getPool } from "../db.js";
import { sendEmail } from "../emails/send.js";
import { betaInviteEmail, confirmationEmail } from "../emails/templates.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BATCH_SIZE = 50;
const BATCH_DELAY_MS = 1000;

export const waitlistRouter = Router();

waitlistRouter.post("/", async (req, res) => {
  try {
    const email = String(req.body.email ?? "")
      .trim()
      .toLowerCase();
    const consent = req.body.consent === true;

    if (!consent) {
      res.status(400).json({ error: "consent" });
      return;
    }

    if (!email || !EMAIL_RE.test(email)) {
      res.status(400).json({ error: "invalid" });
      return;
    }

    const db = getPool();
    const clientIp =
      (typeof req.headers["x-forwarded-for"] === "string"
        ? req.headers["x-forwarded-for"].split(",")[0]?.trim()
        : null) ?? req.ip;

    const existing = await db.query(
      "select id from waitlist_signups where lower(email) = $1 limit 1",
      [email],
    );

    if (existing.rowCount) {
      res.status(409).json({ error: "duplicate" });
      return;
    }

    await db.query(
      `insert into waitlist_signups (email, client_ip, source)
       values ($1, $2, 'landing')`,
      [email, clientIp],
    );

    const { subject, html } = confirmationEmail(email);
    const sent = await sendEmail(email, subject, html);

    if (sent) {
      await db.query(
        "update waitlist_signups set confirmation_sent_at = now() where lower(email) = $1",
        [email],
      );
    }

    res.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "23505") {
      res.status(409).json({ error: "duplicate" });
      return;
    }
    console.error(error);
    res.status(500).json({ error: "server" });
  }
});

waitlistRouter.post("/send-beta-invites", async (req, res) => {
  const adminSecret = process.env.ADMIN_SECRET;
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");

  if (!adminSecret || token !== adminSecret) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  const dryRun = req.query.dry_run === "true";

  try {
    const db = getPool();
    const { rows } = await db.query<{ id: string; email: string }>(
      `select id, email from waitlist_signups
       where invited_at is null
       order by created_at asc`,
    );

    if (!rows.length) {
      res.json({ ok: true, sent: 0, message: "No pending invites" });
      return;
    }

    if (dryRun) {
      res.json({ ok: true, dry_run: true, pending: rows.length });
      return;
    }

    const { subject, html } = betaInviteEmail();
    let sent = 0;
    const failed: string[] = [];
    const invitedIds: string[] = [];

    for (let i = 0; i < rows.length; i += BATCH_SIZE) {
      const batch = rows.slice(i, i + BATCH_SIZE);

      for (const signup of batch) {
        const ok = await sendEmail(signup.email, subject, html);
        if (ok) {
          sent += 1;
          invitedIds.push(signup.id);
        } else {
          failed.push(signup.email);
        }
      }

      if (i + BATCH_SIZE < rows.length) {
        await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
      }
    }

    if (invitedIds.length) {
      await db.query(
        "update waitlist_signups set invited_at = now() where id = any($1::uuid[])",
        [invitedIds],
      );
    }

    res.json({
      ok: true,
      sent,
      failed: failed.length,
      failed_emails: failed.slice(0, 10),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server" });
  }
});
