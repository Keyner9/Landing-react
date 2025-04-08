import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Catálogo", link: "#" },
  { id: 3, title: "Promociones", link: "#" },
  { id: 4, title: "Únete", link: "#" },
];

const navbarRedes = [
  { id: 1, link: "https://www.instagram.com", icon: "bi bi-instagram" },
  { id: 2, link: "https://www.tiktok.com", icon: "bi bi-tiktok" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-900 bg-opacity-30 backdrop-blur-md z-50 flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
      {/* Logo navbar */}
      <div>
        <img src={Logo} alt="Logo del sitio" className="w-[50px]" />
      </div>
      {/* Botón hamburguesa */}
      <button onClick={toggleMenu} className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* Navegación desktop */}
      <div className="hidden md:block">
        <ul className="flex sm:space-x-8 space-x-4">
          {navbarlinks.map((link) => (
            <li key={link.id}>
              <a
                className="text-white sm:text-lg text-sm hover:text-sky-300 transition-transform hover:scale-110 transform inline-block duration-400"
                href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Navegación redes desktop */}
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          {navbarRedes.map((red) => (
            <li key={red.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 transform hover:scale-125"
                href={red.link}>
                <i className={`${red.icon} text-lg text-white hover:text-sky-200`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Menú móvil */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-purple-950 transition-all duration-300 md:hidden transform ${
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
          }`}>
          <ul className="flex flex-col px-4 py-2 border-t border-purple-700">
            {navbarlinks.map((link) => (
              <li key={link.id} className="py-2 text-center">
                <a
                  className="text-white hover:text-sky-200"
                  href={link.link}
                  onClick={() => setIsOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes sociales en menú móvil */}
          <div className="flex justify-center space-x-4 py-2 border-t border-purple-700">
            {navbarRedes.map((red) => (
              <a
                key={red.id}
                target="_blank"
                rel="noopener noreferrer"
                href={red.link}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-sky-200 text-xl">
                <i className={red.icon} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
