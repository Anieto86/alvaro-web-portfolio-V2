import { useState } from "react";
import type { FormEvent } from "react";
import { CONTACT_FORM_ENDPOINT } from "../utils/contact";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-400";

const labelClass = "block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300";

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    // A urlencoded body is a "simple" request, so no CORS preflight is needed.
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") body.set(key, value);
    });

    setStatus("sending");
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body,
      });
      const result: { ok?: boolean } = await response.json();
      if (!response.ok || !result.ok) throw new Error("Message not sent");
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-xl"
    >
      {/* Honeypot field: hidden from people, bots tend to fill it in. */}
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-2 font-medium text-white transition bg-purple-500 rounded-full hover:bg-purple-600 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="text-green-600 dark:text-green-400">
              Thanks! Your message was sent.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-600 dark:text-red-400">
              Something went wrong. Please try again or use the email link
              below.
            </span>
          )}
        </p>
      </div>
    </form>
  );
};
