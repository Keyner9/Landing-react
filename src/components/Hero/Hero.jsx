import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { slipeUp, slipeFrontSide } from "../../utility/animation";
const Hero = () => {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/*Texto y descripcion */}
        <div className="sm:p-10 md:p-15 lg:p-30 xl:p-36">
          <motion.img
            src={Logo}
            alt="Logo del juego"
            variants={slipeUp(0.5)}
            initial="initial"
            animate="animate"
          />
          <motion.p
            className="py-12 text-white"
            variants={slipeUp(0.5)}
            initial="initial"
            animate="animate">
            señoras calientes cercanas a tu casa
          </motion.p>

          <motion.div
            className=" flex justify-center gap-4"
            variants={slipeUp(1.6)}
            initial="initial"
            animate="animate">
            <a className="bg-purple-600 py-2 px-12 rounded-3x1 text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer">
              Jugar ahora
              <i class="bi bi-controller text-xl ml-2"></i>
            </a>
            <a className="text-white flex items-center cursor-pointer">
              Ver GamePlay
              <i class="bi bi-youtube text-xl m1-2"></i>
            </a>
          </motion.div>
        </div>
        {/*Imagen */}
        <motion.div
          className="sm:p-10 md:p-15 lg:p-30 xl:p-36"
          variants={slipeFrontSide("right", 0.5)}
          initial="initial"
          animate="animate">
          <img src={Personaje} alt="Señora del juego" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
