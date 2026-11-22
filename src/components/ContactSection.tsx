import { MailIcon } from "../assets/icons/MailIcon";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_ENDPOINT,
  GMAIL_COMPOSE_URL,
} from "../utils/contact";
import { ContactForm } from "./ContactForm";
import { SocialPill } from "./SocialPill";

// Shows the form once the backend is configured, otherwise an email button.
export const ContactSection = () => {
  if (!CONTACT_FORM_ENDPOINT) {
    return (
      <div className="flex flex-col items-start gap-4 text-gray-700 dark:text-gray-300">
        <p className="max-w-xl text-pretty">
          Have a project, a question or just want to say hi? Send me an email
          and I'll get back to you.
        </p>
        <SocialPill href={GMAIL_COMPOSE_URL}>
          <MailIcon className="size-4" />
          {CONTACT_EMAIL}
        </SocialPill>
      </div>
    );
  }

  return (
    <>
      <ContactForm />
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Prefer email?{" "}
        <a
          className="underline hover:text-purple-500 dark:hover:text-yellow-400"
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </>
  );
};
