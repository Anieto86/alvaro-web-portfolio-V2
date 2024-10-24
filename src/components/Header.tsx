import { useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  {
    title: 'Experience',
    label: 'experience',
    url: '/#experience',
  },
  {
    title: 'Projects',
    label: 'projects',
    url: '/#projects',
  },
  {
    title: 'About Me',
    label: 'about-me',
    url: '/#about-me',
  },
  {
    title: 'Contacto',
    label: 'contacto',
    url: 'mailto:alvaro.f.nieto@gmail.com',
  },
];

export const Header = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navItemsElements = document.querySelectorAll('header nav a');

    const callback = (
      entries: { isIntersecting: unknown; target: { id: string | null } }[]
    ) => {
      entries.forEach(
        (entry: { isIntersecting: unknown; target: { id: string | null } }) => {
          if (entry.isIntersecting) {
            navItemsElements.forEach((item) => {
              if (item.getAttribute('aria-label') === entry.target.id) {
                item.classList.add('text-blue-500');
              } else {
                item.classList.remove('text-blue-500');
              }
            });
          }
        }
      );
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center dark:bg-gray-800/90 bg-white/50 animate-nav-shadow">
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
};
