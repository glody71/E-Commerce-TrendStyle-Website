import React from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { JoinUs } from "../components/JoinUs";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="items-center flex flex-col justify-center mb-8">
            <h1 className="text-5xl my-4 font-semibold ">
              <span className="text-blue-500 font-bold">Our </span>Products
            </h1>
            <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
      <JoinUs/>
    </div>
  );
};

export default Home;
