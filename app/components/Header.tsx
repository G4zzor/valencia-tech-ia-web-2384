import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ValenciaTech
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="#servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
            <li><Link href="#nosotros" className="hover:text-accent transition-colors">Nosotros</Link></li>
            <li><Link href="#contacto" className="bg-secondary hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors font-semibold">Contacto</Link></li>
          </ul>
        </nav>
        {/* Mobile menu toggle - simplified for minimal version */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}