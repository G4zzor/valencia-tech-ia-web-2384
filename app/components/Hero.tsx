import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 md:py-32 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Transformamos Ideas en Éxito Digital
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
          Especialistas en Desarrollo Web de vanguardia y Automatización Inteligente con IA en Valencia.
        </p>
        <Link href="#contacto" className="bg-secondary hover:bg-green-600 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
          Impulsa tu Negocio Hoy
        </Link>
      </div>
    </section>
  );
}