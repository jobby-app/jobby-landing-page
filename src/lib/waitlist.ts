export type WaitlistSignupResult =
  | { ok: true }
  | { ok: false; error: "duplicate" | "invalid" | "network" | "server" | "consent" | "rate_limit" };

const API_URL = import.meta.env.VITE_WAITLIST_API_URL ?? "/api/waitlist";

export async function signupWaitlist(
  email: string,
  consent: boolean,
): Promise<WaitlistSignupResult> {
  if (!consent) return { ok: false, error: "consent" };

  const trimmed = email.trim().toLowerCase();
  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { ok: false, error: "invalid" };
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed, consent: true }),
    });

    const data = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

    if (response.status === 409 || data.error === "duplicate") {
      return { ok: false, error: "duplicate" };
    }

    if (response.status === 429 || data.error === "rate_limit") {
      return { ok: false, error: "rate_limit" };
    }

    if (response.status === 400) {
      return { ok: false, error: data.error === "consent" ? "consent" : "invalid" };
    }

    if (!response.ok) {
      return { ok: false, error: "server" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "network" };
  }
}
