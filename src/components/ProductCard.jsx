import { motion } from "framer-motion";
import { products } from "../data/products";

export const ProductCard = ({ product, onAddToCart }) => (
  <motion.div className="bg-white rounded-2xl shadow-md p-5 w-full max-2sm">
    <img src={product.image} alt={product.name} className="rounded-xl mb-4" />
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p className="text-gray-700">${product.price.toLocaleString()}</p>
    <div className="mt-4 flex gap-2">
      <button 
        className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm"
        onClick={() => onAddToCart(product)}
      >
        Agregar al carrito
      </button>
      <button 
        className="border border-purple-700 text-purple-700 px-4 py-2 rounded-full text-sm"
        onClick={() => alert(product.description)} // o modal
      >
        Ver más
      </button>
    </div>
  </motion.div>
);




