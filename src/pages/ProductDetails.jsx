import React from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const {addToCart} = useContext(CartContext)

  const { id } = useParams();

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const { image, category, title, price, rating, description } = product;

  return (
    <div className="md:pt-32 pt-12 md:pb-12 md:h-screen md:mb-8 h-full">
      <div className="md:flex md:justify-start gap-16 justify-center items-center md:items-start md:mx-[200px] bg-white p-8 shadow-2xl">
        <div className="flex justify-center items-center">
          <img
            className="max-w-[200px] max-h-[400px] md:max-w-sm "
            src={image}
            alt="productimage"
          />
        </div>

        <div className="md:w-[600px] pt-8 text-center md:text-start ">
          <h1 className="font-semibold text-3xl mb-8">{title}</h1>
          <p className="font-semibold mb-4 text-xl">${price}</p>
          <p className="text-slate-600">{description}</p>
          <button onClick={() => {addToCart(product, id)}} className="mt-8 bg-black text-white px-6 py-4 font-semibold">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
