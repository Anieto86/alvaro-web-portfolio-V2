interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer = ({
  className,
  id,
  children,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      {children}
    </section>
  );
};
