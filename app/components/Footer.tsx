export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-800 text-white py-8">
      <div className="container text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">ValenciaTech</p>
          <p className="text-sm text-gray-400">Innovación Tecnológica para tu Negocio.</p>
        </div>
        <div className="mb-4">
          <p className="text-sm">Contáctanos:</p>
          <p className="text-sm font-medium">info@valenciatech.com | +34 600 123 456</p>
          <p className="text-sm text-gray-400">Valencia, España</p>
        </div>
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} ValenciaTech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}