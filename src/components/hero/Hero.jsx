const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 py-8 px-4 bg-gradient-to-b from-light-background to-light-backgroundSecondary dark:from-dark-background dark:to-dark-backgroundSecondary">
      {/* Texto */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text">
          ¡Hola, soy Lucio Morales!
        </h2>
        <p className="text-light-textSecondary dark:text-dark-textSecondary text-lg md:text-xl">
          Apasionado por crear aplicaciones web elegantes y funcionales. ¡Listo
          para unirme a tu equipo!
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background py-2 px-6 rounded-full shadow-md hover:opacity-90 transition">
            Contáctame
          </button>
          <button className="bg-light-secondary dark:bg-dark-secondary text-light-background dark:text-dark-background py-2 px-6 rounded-full shadow-md hover:opacity-90 transition">
            Descargar CV
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/profile-image.png"
          alt="Lucio Morales"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
