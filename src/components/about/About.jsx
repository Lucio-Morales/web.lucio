const About = () => {
  return (
    <section className="min-h-screen py-8 px-4 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
      <img
        src="https://via.placeholder.com/300"
        alt="Sobre mí"
        className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg"
      />
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
          Sobre Mí
        </h2>
        <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg">
          Soy un desarrollador apasionado por crear soluciones tecnológicas. Me
          especializo en React y Node.js, y disfruto trabajar en proyectos
          innovadores.
        </p>
      </div>
    </section>
  );
};

export default About;
