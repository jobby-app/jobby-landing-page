import { Resend } from "resend";

let resend: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resend) resend = new Resend(apiKey);
  return resend;
}

export async function sendEmail(to: string, subject: string, html: string) {
  const client = getResend();
  const from = process.env.RESEND_FROM_EMAIL ?? "Jobby <waitlist@getjobby.pl>";

  if (!client) {
    console.warn("RESEND_API_KEY not set — email not sent to", to);
    return false;
  }

  const { error } = await client.emails.send({ from, to, subject, html });
  if (error) {
    console.error("Resend error:", error);
    return false;
  }

  return true;
}
