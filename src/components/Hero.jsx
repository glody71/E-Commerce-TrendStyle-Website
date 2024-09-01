import React from "react";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="py-16 md:bg-hero bg-cover bg-no-repeat md:h-[711px] relative bg-slate-100 ">
        <div className="md:absolute md:top-64 md:left-36 flex flex-col  ">
          <h1 className="text-4xl font-semibold hidden md:block">Elevate Your Style with </h1>
          <h1 className="text-6xl font-bold text-center md:text-start">
            Trend<span className="text-blue-500">Style</span>
          </h1>
          <div className="md:w-[600px] mt-8 text-center md:text-start">
            <p>
              Welcome to TrendStyle, where fashion meets individuality. Discover
              the latest trends, curated just for you. Whether you're looking to
              revamp your wardrobe or find the perfect outfit for any occasion,
              we've got you covered. Step into the world of TrendStyle, where
              your style is our passion.
            </p>
          </div>
          <div className="mt-12 text-center md:text-start">
            <Link to={'/shop'} className="bg-transparent rounded-full px-4 py-3 font-semibold hover:bg-black hover:text-white border-2 border-black transition duration-300">Discover More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
