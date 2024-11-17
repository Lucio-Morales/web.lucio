const Services = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-4 text-center">
      <div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-lg shadow-md p-6 transform transition hover:scale-105">
        <i className="fas fa-laptop-code text-4xl text-light-primary dark:text-dark-primary mb-4"></i>
        <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
          Desarrollo Frontend
        </h3>
        <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
          React, Tailwind CSS, JavaScript
        </p>
      </div>
      <div className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary rounded-lg shadow-md p-6 transform transition hover:scale-105">
        <i className="fas fa-server text-4xl text-light-primary dark:text-dark-primary mb-4"></i>
        <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
          Backend API
        </h3>
        <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
          Node.js, Express, PostgreSQL
        </p>
      </div>
    </section>
  );
};

export default Services;
