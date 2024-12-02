interface SocialPillProps {
  children: React.ReactNode;
  href: string;
}

export const SocialPill = ({ children, href }: SocialPillProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      role="link"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
    >
      {children}
    </a>
  );
};
