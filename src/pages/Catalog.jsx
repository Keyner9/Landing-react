// src/pages/Catalog.jsx
import { useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const Catalog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const categories = ["Todas", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchCategory = category === "Todas" || p.category === category;
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchName;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded">
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(item) => console.log("Agregar:", item)}
          />
        ))}
      </div>
    </div>
  );
};
