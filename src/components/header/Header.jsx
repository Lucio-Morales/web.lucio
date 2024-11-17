import {
  //   HomeIcon,
  UserIcon,
  BriefcaseIcon,
  PhoneIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Header = () => {
  const [active, setActive] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <header
      className={`fixed bottom-0 left-0 w-full bg-light-background shadow-xl dark:bg-dark-background z-50 ${
        isDarkMode
          ? 'shadow-[0_2px_10px_2px_rgba(0,0,0,0.2)]'
          : 'shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)]'
      }`}
    >
      <nav className="flex justify-between items-center p-4">
        <a
          href="#home"
          onClick={() => handleClick('home')}
          className={`flex flex-col items-center space-y-1 ${
            active === 'home'
              ? 'text-light-primary dark:text-dark-primary'
              : 'text-light-text dark:text-dark-text'
          }`}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/profile-image.png" // Asegúrate de poner aquí la URL de tu imagen
              alt="Home"
              className="w-full h-full object-cover"
            />
          </div>
          {/* <span className="text-xs">Home</span> */}
        </a>
        <a
          href="#about"
          onClick={() => handleClick('about')}
          className={`flex flex-col items-center space-y-1 ${
            active === 'about'
              ? 'text-light-primary dark:text-dark-primary'
              : 'text-light-text dark:text-dark-text'
          }`}
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">About</span>
        </a>
        <a
          href="#projects"
          onClick={() => handleClick('projects')}
          className={`flex flex-col items-center space-y-1 ${
            active === 'projects'
              ? 'text-light-primary dark:text-dark-primary'
              : 'text-light-text dark:text-dark-text'
          }`}
        >
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xs">Projects</span>
        </a>
        <a
          href="#contact"
          onClick={() => handleClick('contact')}
          className={`flex flex-col items-center space-y-1 ${
            active === 'contact'
              ? 'text-light-primary dark:text-dark-primary'
              : 'text-light-text dark:text-dark-text'
          }`}
        >
          <PhoneIcon className="h-6 w-6" />
          <span className="text-xs">Contact</span>
        </a>

        {/* Botón para cambiar entre modo claro y oscuro */}
        <button
          onClick={() => setIsDarkMode((prevMode) => !prevMode)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary text-light-text dark:text-dark-text"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
