import React from "react";
import { useContext } from "react";
import Product from '../components/Product'
import { ProductContext } from "../contexts/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="py-24">
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
