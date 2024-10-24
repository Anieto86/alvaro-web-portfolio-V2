import React from 'react';

interface TitleSectionProps {
  className?: string;
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ className, children }) => {
  return (
    <h2
      className={`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${className}`}
    >
      {children}
    </h2>
  );
};

export default TitleSection;
