import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { slug } = useParams();

  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Categoría: {slug?.replace("-", " ")}
      </h2>
      <p className="text-gray-600">Aquí podrías cargar productos relacionados a esta categoría.</p>
    </section>
  );
};

export default CategoryPage;
