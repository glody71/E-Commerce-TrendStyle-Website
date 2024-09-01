import React from "react";
import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const { id, image, category, title, price, rating, description } = product;
  return (
    <div>
      <div className="border-2 border-[#e4e4e4] h-full w-64 mx4 mb-2 shadow-xl relative overflow-hidden group transition bg-white">
        <div className="w-full h-full flex justify-center gap-2">
          <div className="w-64 flex justify-center flex-col items-center">
            <img
              className="h-44 group-hover:scale-110 transition duration-300 mb-4 mt-8"
              src={image}
              alt=""
            />
            <div className="w-64">
              <div className="m-2">
                <h4 className="capitalize text-slate-400">{category}</h4>
                <h2 className="line-clamp-2 font-semibold">{title}</h2>
                <p className="line-clamp-2 text-slate-400 ">{description}</p>
                <p className="font-bold text-blue-500">$ {price}</p>
              </div>
            </div>
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 bg-slate-300 p-2 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-95 transition-all duration-300">
            <button onClick={() => {addToCart(product, id)}}>
              <div className="flex justify-center items-center text-white w-12 bg-blue-500 h-12">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex items-center text-slate-900 justify-center"
            >
              <BsEyeFill />
            </Link>
          </div>
          <div className="absolute top-3 left-3 items-center bg-slate-300 rounded-full  ">
            <div className="flex gap-2 p-2 px-4">
              <FaStar className="text-yellow-500 text-xl " />
              <p className="text-sm font-semibold">{rating.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
