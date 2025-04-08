import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="bg-pink-100 px-4 text-center mt-24">
      <div className="max-w-4xl mx-auto py-16">
        <Slider {...settings}>
          <div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-gray-800">
              Donde quieras. <br /> Cuando quieras. <br /> Como quieras.
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-8 text-gray-900">
              ¡Ahora puedes comprar Mary Kay en línea!
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Compra aquí
            </button>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-gray-800">
              Productos originales. <br /> Belleza sin límites.
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-8 text-gray-900">
              La calidad Mary Kay, ahora más cerca de ti.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              Ver más
            </button>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SliderHero;
