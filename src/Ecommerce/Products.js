import React from "react";
import { mockProducts } from "./mockProducts";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <div className="col-8 border">
      <div className="row">
        {mockProducts.map((product, index) => (
          <div key={index} className="col-md-3 mb-4">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
