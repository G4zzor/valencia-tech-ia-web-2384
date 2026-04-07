export default function Services() {
  const serviceItems = [
    {
      title: 'Desarrollo Web a Medida',
      description: 'Diseñamos y construimos sitios web, aplicaciones y e-commerce escalables que cautivan a tu audiencia y optimizan tus objetivos de negocio.',
      icon: '🌐'
    },
    {
      title: 'Automatización con Inteligencia Artificial',
      description: 'Implementamos soluciones de IA para automatizar procesos, analizar datos y optimizar la toma de decisiones, mejorando la eficiencia y reduciendo costes.',
      icon: '🤖'
    },
    {
      title: 'Consultoría Tecnológica Estratégica',
      description: 'Te guiamos en la adopción de las mejores tecnologías, desarrollando hojas de ruta claras para el crecimiento digital y la innovación continua.',
      icon: '💡'
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12">
          Nuestros Servicios Clave
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-textPrimary mb-3">{item.title}</h3>
              <p className="text-textSecondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}