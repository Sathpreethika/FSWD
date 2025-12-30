import React, { useState } from "react";

function Browsing() {
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "Laptop", category: "electronics" },
    { id: 2, name: "Smartphone", category: "electronics" },
    { id: 3, name: "T-Shirt", category: "fashion" },
    { id: 4, name: "Jeans", category: "fashion" },
    { id: 5, name: "Cookware Set", category: "home" },
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h1>Product Browsing</h1>

      {/* Category Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCategory("all")}>All</button>{" "}
        <button onClick={() => setCategory("electronics")}>Electronics</button>{" "}
        <button onClick={() => setCategory("fashion")}>Fashion</button>{" "}
        <button onClick={() => setCategory("home")}>Home</button>
      </div>

      {/* Category Display */}
      <h3>Category: {category.toUpperCase()}</h3>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Browsing;
