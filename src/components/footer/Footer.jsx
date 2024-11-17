const Footer = () => {
  return (
    <footer className="bg-light-primary dark:bg-dark-primary py-6 px-4 text-center">
      <p className="text-light-background dark:text-dark-background text-sm">
        © 2024 Mi Portafolio. Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="text-light-background dark:text-dark-background text-xl hover:opacity-75 transition"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="#"
          className="text-light-background dark:text-dark-background text-xl hover:opacity-75 transition"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
