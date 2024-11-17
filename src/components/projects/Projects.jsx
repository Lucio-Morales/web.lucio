const Projects = () => {
  return (
    <section className="min-h-screen space-y-6 py-8 px-4">
      <h2 className="text-2xl font-bold text-light-text dark:text-dark-text text-center">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Proyecto 1"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
              Proyecto 1
            </h3>
            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
              Descripción breve del proyecto.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-background py-2 px-4 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
        {/* Repite para más proyectos */}
      </div>
    </section>
  );
};

export default Projects;
