import React from "react";
import HeroBg from "../assets/Fondo.webp"; // Asegúrate de tener la imagen en esa ruta
import Mujer from "../assets/mujer.png"; // La imagen de la señora (recórtala en PNG si quieres fondo transparente)

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center px-6 md:px-20"
      style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-7xl">
        {/* Izquierda: texto */}
        <div className="text-center md:text-left text-black space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold italic leading-tight">
            Belleza y Cuidado
            <br />
            Personal
          </h1>
          <p className="text-base md:text-lg from-neutral-800 max-w-md mx-auto md:mx-0">
            Bienvenida a Mary Kay, tu destino de belleza y bienestar. Descubre nuestra exclusiva
            línea de productos de cuidado personal y maquillaje, formulados para realzar tu brillo
            natural y cuidar tu piel día a día...
          </p>
          <button
            onClick={scrollToAbout}
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition">
            Ver más
          </button>
        </div>

        {/* Derecha: imagen mujer */}
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src={Mujer}
            alt="Mujer aplicando maquillaje"
            className="w-[500px] md:w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
