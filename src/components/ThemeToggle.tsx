import { useState, useEffect } from 'react';
// import SunIcon from './icons/Sun'; // Asegúrate de que estos íconos sean componentes de React
// import MoonIcon from './icons/Moon';
// import SystemIcon from './icons/System';

const THEMES = ['Light', 'Dark', 'System'];

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getThemePreference());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      const isDark =
        theme === 'dark' || (theme === 'system' && matchMedia.matches);
      updateIcon(theme);
      document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    };

    updateTheme();
    matchMedia.addEventListener('change', updateTheme);

    return () => {
      matchMedia.removeEventListener('change', updateTheme);
    };
  }, [theme]);

  const getThemePreference = () => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') ?? 'system';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const updateIcon = (themePreference) => {
    document.querySelectorAll('.theme-toggle-icon').forEach((element) => {
      (element as HTMLElement).style.transform =
        element.id === themePreference ? 'scale(1)' : 'scale(0)';
    });
  };

  const handleThemeChange = (newTheme) => {
    localStorage.setItem('theme', newTheme.toLowerCase().trim());
    setTheme(newTheme.toLowerCase());
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={toggleMenu}
      >
        <span className="sr-only">Elige el tema</span>
        <SunIcon
          id="light"
          className="theme-toggle-icon size-5 transition-all"
        />
        <MoonIcon
          id="dark"
          className="theme-toggle-icon absolute size-5 transition-all"
        />
        <SystemIcon
          id="system"
          className="theme-toggle-icon absolute size-5 transition-all"
        />
      </button>

      {isMenuOpen && (
        <div
          id="themes-menu"
          className="absolute scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md open"
        >
          <ul>
            {THEMES.map((themeOption) => (
              <li
                key={themeOption}
                className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
                onClick={() => handleThemeChange(themeOption)}
              >
                {themeOption}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
