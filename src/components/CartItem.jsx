import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  return (
    <div className="flex gap-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
      <div className="w-full min-h-[150px] flex items-center gap-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <Link
              className="text-sm font-semibold max-w-[240px] hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div onClick={()=>{removeFromCart(id)}} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-blue-500 transition" />
            </div>
          </div>
          <div className=" flex gap-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div onClick={()=>decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center hover:cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={()=>increaseAmount(id)} className="flex-1 h-full flex justify-center items-center hover:cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center font-semibold">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
