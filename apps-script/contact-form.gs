/**
 * Contact form backend for the portfolio.
 *
 * Receives the form POST and emails it to RECIPIENT. Deploy as a Web app:
 *   Execute as: Me
 *   Who has access: Anyone
 * See "Contact form" in README.md for the full steps.
 */
const RECIPIENT = "alvaro.f.nieto@gmail.com";

function doPost(e) {
  try {
    const params = (e && e.parameter) || {};

    // Honeypot: real visitors never fill this field. Pretend success for bots.
    if (params["bot-field"]) return json_({ ok: true });

    const name = singleLine_(params.name, 100);
    const email = singleLine_(params.email, 200);
    const message = String(params.message || "").trim().slice(0, 5000);

    const emailLooksValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!name || !message || !emailLooksValid) {
      return json_({ ok: false, error: "invalid" });
    }

    MailApp.sendEmail({
      to: RECIPIENT,
      replyTo: email,
      name: "Portfolio contact form",
      subject: "Portfolio contact: " + name,
      body: "Name: " + name + "\nEmail: " + email + "\n\n" + message,
    });

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "server" });
  }
}

function singleLine_(value, maxLength) {
  return String(value || "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
