import React, { useContext, useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { MdMenu } from "react-icons/md";
import { BiArrowToLeft } from "react-icons/bi";

const Header = () => {
  const location = useLocation();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname); // Update state when the pathname changes
  }, [location.pathname]);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 bg-white z-20 opacity-95 shadow-lg">
        <div className="flex justify-between md:mx-8 mx-4 p-2 items-center">
          <div className="flex justify-center items-center gap-4">
            <MdMenu className="md:hidden text-lg" onClick={toggleMenu} />
            <Link to={"/"} className="font-bold text-xl hover:cursor-pointer ">
              Trend<span className="text-blue-500 font-semibold">Style</span>
            </Link>
          </div>

          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-4 mr-8">
              <Link
                to="/"
                onClick={() => handleClick("/")}
                className={`p-2 px-3 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${
                  activeLink === "/" ? "bg-blue-500 text-white" : "text-black"
                }`}
              >
                Home
              </Link>
              <Link
                to={"/shop"}
                onClick={() => handleClick("/shop")}
                className={`py-2 rounded-lg px-4 transition duration-300 hover:bg-blue-500 hover:text-white ${
                  activeLink === "/shop"
                    ? "bg-blue-500 text-white"
                    : "text-black"
                }`}
              >
                Shop
              </Link>
              <Link
                to={"/about"}
                onClick={() => handleClick("/about")}
                className={`p-2 px-3 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${
                  activeLink === "/about"
                    ? "bg-blue-500 text-white"
                    : "text-black"
                }`}
              >
                About
              </Link>
            </div>

            <BiCart
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-2xl hover:cursor-pointer hover:text-blue-500 transition duration-300 "
            />
          </div>
        </div>
      </nav>
      {/* sidebar 2 */}
      <div
        className={`${
          menuOpened ? "top-0" : "-top-full"
        } w-full bg-white fixed h-[35vh] shadow-xl md:w-[50vh] transition-all duration-300 z-20 px-4 py-4`}
      >
        <div className="flex justify-between px-4 items-center">
          <BiArrowToLeft
            onClick={toggleMenu}
            className="text-2xl hover:cursor-pointer hover:text-blue-500 transition duration-300"
          />
          <h1 className="font-bold text-xl hover:cursor-pointer ">
            Trend<span className="text-blue-500 font-semibold">Style</span>
          </h1>
        </div>
        <hr className="mt-4" />
        <div className="flex flex-col mt-4">
          <Link
            to="/"
            onClick={() => handleClick("/")}
            className={`p-2 px-3 rounded-lg transition duration-300 ${
              activeLink === "/" ? "bg-blue-500 text-white" : "text-black"
            }`}
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            onClick={() => handleClick("/shop")}
            className={`py-2 rounded-lg px-4 transition duration-300 ${
              activeLink === "/shop" ? "bg-blue-500 text-white" : "text-black"
            }`}
          >
          Shop
          </Link>
          <Link
            to={"/about"}
            onClick={() => handleClick("/about")}
            className={`p-2 px-3 rounded-lg transition duration-300 ${
              activeLink === "/about" ? "bg-blue-500 text-white" : "text-black"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
