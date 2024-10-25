interface LinkInlineProps {
  href: string;
  children: React.ReactNode;
}

const LinkInline = ({ href, children }: LinkInlineProps) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"
    >
      {children}
    </a>
  );
};

export default LinkInline;