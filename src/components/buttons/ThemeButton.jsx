import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeButton = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-12 h-12 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background rounded-full shadow-md transition"
    >
      {isDarkMode ? (
        <SunIcon className="w-8 h-8" aria-label="Modo Claro" />
      ) : (
        <MoonIcon className="w-6 h-6" aria-label="Modo Oscuro" />
      )}
    </button>
  );
};

export default ThemeButton;
