import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BiArrowToRight, BiX } from "react-icons/bi";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-xl md:w-[65vh] transition-all duration-300 z-20 px-4 py-4`}
    >
      <div className="flex justify-between px-4 items-center">
        <p className="text-sm font-semibold">Shopping Bag</p>
        <BiArrowToRight
          onClick={handleClose}
          className="text-2xl hover:cursor-pointer hover:text-blue-500 transition duration-300"
        />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-2 h-[420px] md:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
      <div onClick={()=>{}} className="p-4 bg-blue-500 flex items-center justify-center font-semibold text-white mt-2 hover:cursor-pointer">Checkout</div>
    </div>
  );
};

export default Sidebar;
