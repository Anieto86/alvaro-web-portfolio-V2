import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  {
    title: "Experience",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Science",
    label: "science",
    url: "/#science",
  },
  {
    title: "Data",
    label: "data",
    url: "/#data",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "About",
    label: "about-me",
    url: "/#about-me",
  },

  {
    title: "Contact",
    label: "contact",
    url: "/#contact",
  },
];

export const Header = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItemsElements = document.querySelectorAll("header nav a");

    const callback = (
      entries: { isIntersecting: unknown; target: { id: string | null } }[]
    ) => {
      entries.forEach(
        (entry: { isIntersecting: unknown; target: { id: string | null } }) => {
          if (entry.isIntersecting) {
            navItemsElements.forEach((item) => {
              if (item.getAttribute("data-section") === entry.target.id) {
                item.classList.add("text-purple-500", "dark:text-yellow-400");
              } else {
                item.classList.remove("text-purple-500", "dark:text-yellow-400");
              }
            });
          }
        }
      );
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center dark:bg-gray-800/90 bg-white/50 animate-nav-shadow">
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-1.5 py-2 transition sm:px-2 hover:text-purple-500 dark:hover:text-yellow-400"
            data-section={link.label}
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
