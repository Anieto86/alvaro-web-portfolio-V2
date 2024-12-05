interface LinkInlineProps {
  href: string;
  children: React.ReactNode;
}

const LinkInline = ({ href, children }: LinkInlineProps) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-lg font-medium text-purple-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default LinkInline;
