import type { ReactNode } from "react";

interface IconLinkProps {
  children: ReactNode;
  href: string;
  // Accessible name, also shown as a tooltip.
  label: string;
}

// Compact icon-only external link for secondary profiles (LinkedIn, GitHub).
export const IconLink = ({ children, href, label }: IconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full size-9 dark:bg-gray-800 dark:border-gray-600 dark:text-white hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
};
