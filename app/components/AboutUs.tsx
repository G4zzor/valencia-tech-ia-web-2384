export default function AboutUs() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container text-center md:text-left">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">
              Impulsando el Futuro Digital desde Valencia
            </h2>
            <p className="text-lg text-textSecondary mb-4">
              En ValenciaTech, somos un equipo apasionado de innovadores con sede en el vibrante ecosistema tecnológico de Valencia. Creemos en el poder de la tecnología para transformar negocios y simplificar vidas.
            </p>
            <p className="text-lg text-textSecondary">
              Nuestra misión es empoderar a empresas con soluciones web robustas y automatizaciones inteligentes que no solo cumplen sus expectativas, sino que las superan, abriendo nuevas vías de crecimiento y eficiencia. Nos comprometemos con la excelencia, la transparencia y los resultados medibles.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/600x400/2A5D88/FFFFFF?text=Equipo+ValenciaTech"
              alt="Equipo de ValenciaTech en Valencia"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}