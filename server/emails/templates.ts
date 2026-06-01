const BRAND = "Jobby";
const WEBSITE = "https://getjobby.pl";
const SUPPORT_EMAIL = "support@getjobby.pl";

function emailShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0c0f10;font-family:Inter,system-ui,sans-serif;color:#e1e3e4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0c0f10;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:520px;background:#111415;border-radius:24px;border:1px solid #2c2f30;padding:40px 32px;">
        <tr><td>
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#c3f400;">${BRAND}</p>
          <h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;color:#ffffff;">${title}</h1>
          ${body}
          <p style="margin:32px 0 0;font-size:13px;line-height:1.6;color:#5c5b5b;">
            Masz pytania? Napisz na <a href="mailto:${SUPPORT_EMAIL}" style="color:#c3f400;">${SUPPORT_EMAIL}</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function confirmationEmail(email: string) {
  const body = `
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#c4c9ad;">
      Cześć! Potwierdzamy zapis na waitlistę <strong style="color:#ccff00;">${BRAND}</strong>.
    </p>
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#c4c9ad;">
      Twój adres <strong style="color:#ffffff;">${email}</strong> jest na liście. Damy znać, gdy wystartujemy w Twojej okolicy — a wcześniej możesz dostać zaproszenie do beta testów.
    </p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#5c5b5b;">
      Nie zapisywałeś/aś się? Zignoruj tę wiadomość lub napisz na ${SUPPORT_EMAIL}.
    </p>`;
  return {
    subject: `Potwierdzenie zapisu na waitlistę ${BRAND}`,
    html: emailShell("Jesteś na liście!", body),
  };
}

export function betaInviteEmail() {
  const body = `
    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#c4c9ad;">
      Nadszedł moment — zapraszamy Cię do <strong style="color:#ccff00;">beta testów ${BRAND}</strong>!
    </p>
    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#c4c9ad;">
      Jako jeden z pierwszych możesz przetestować lokalny feed małych zleceń. Pobierz aplikację i zaloguj się tym samym adresem e-mail, którego użyłeś/aś na waitliście.
    </p>
    <p style="margin:0 0 24px;text-align:center;">
      <a href="${WEBSITE}" style="display:inline-block;background:#c3f400;color:#161f00;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:999px;font-size:16px;">
        Wejdź do beta
      </a>
    </p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#5c5b5b;">
      Liczba miejsc jest ograniczona — nie czekaj zbyt długo. Do zobaczenia w ${BRAND}!
    </p>`;
  return {
    subject: `Zaproszenie do beta testów ${BRAND} 🚀`,
    html: emailShell("Zostałeś/aś zaproszony/a do beta!", body),
  };
}
