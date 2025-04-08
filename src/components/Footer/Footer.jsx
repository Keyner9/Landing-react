// src/components/Footer/Footer.jsx

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Mary Kay Store. Todos los derechos reservados.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a href="/contacto" className="hover:underline">
          Contacto
        </a>
        <a href="/politicas" className="hover:underline">
          Políticas
        </a>
        <a href="/ayuda" className="hover:underline">
          Ayuda
        </a>
      </div>
    </footer>
  );
}

export default Footer;
