import { timingSafeEqual } from "node:crypto";
import type { NextFunction, Request, Response } from "express";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function securityHeaders(_req: Request, res: Response, next: NextFunction) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  next();
}

export function safeCompareSecret(provided: string, expected: string): boolean {
  if (!provided || !expected) return false;

  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  if (providedBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(providedBuffer, expectedBuffer);
}

const SIGNUP_WINDOW_MS = 15 * 60 * 1000;
const SIGNUP_MAX_ATTEMPTS = 8;
const signupAttempts = new Map<string, number[]>();

export function signupRateLimit(req: Request, res: Response, next: NextFunction) {
  const ip =
    (typeof req.headers["x-forwarded-for"] === "string"
      ? req.headers["x-forwarded-for"].split(",")[0]?.trim()
      : null) ?? req.ip ?? "unknown";

  const now = Date.now();
  const recent = (signupAttempts.get(ip) ?? []).filter((time) => now - time < SIGNUP_WINDOW_MS);

  if (recent.length >= SIGNUP_MAX_ATTEMPTS) {
    res.status(429).json({ error: "rate_limit" });
    return;
  }

  recent.push(now);
  signupAttempts.set(ip, recent);
  next();
}

export function getClientIp(req: Request): string | null {
  if (typeof req.headers["x-forwarded-for"] === "string") {
    return req.headers["x-forwarded-for"].split(",")[0]?.trim() ?? null;
  }

  return req.ip ?? null;
}
