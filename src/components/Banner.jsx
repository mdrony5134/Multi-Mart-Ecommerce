import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../components/image/banner-bg.jpg";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36 md:py-48 lg:py-64"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container">
        <h1 className="text-5xl lg:text-6xl text-gray-800 mb-6 font-medium">
          Shop Smarter, Shop Happier <br /> Multimart Welcomes You!
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mb-8">
          Shop Smart at Multimart Discover Premium Goods,
          <br /> Amazing Offers, and Hassle-Free Transactions!
        </p>
        <button
          onClick={() => navigate("/product")}
          className="px-4 py-2 bg-primary text-white rounded-full text-lg hover:bg-transparent hover:text-primary transition uppercase font-popins"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
