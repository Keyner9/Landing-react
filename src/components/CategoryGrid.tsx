import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Cuidado Facial", slug: "cuidado-facial", image: "/assets/categories/facial.png" },
  { id: 2, name: "Maquillaje", slug: "maquillaje", image: "/assets/categories/maquillaje.png" },
  { id: 3, name: "Fragancias", slug: "fragancias", image: "/assets/categories/fragancias.png" },
  { id: 4, name: "Cuidado Corporal", slug: "cuidado-corporal", image: "/assets/categories/corporal.png" }
];

const CategoryGrid = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            to={`/categorias/${cat.slug}`}
            key={cat.id}
            className="bg-white p-4 shadow-md rounded-xl text-center hover:shadow-lg transition-all block"
          >
            <img src={cat.image} alt={cat.name} className="mx-auto mb-3 h-24 object-contain" />
            <p className="text-sm font-semibold text-gray-800">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
