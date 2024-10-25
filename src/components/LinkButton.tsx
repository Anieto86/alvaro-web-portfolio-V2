import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

export const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      role="link"
      className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
    >
      {children}
    </a>
  );
};