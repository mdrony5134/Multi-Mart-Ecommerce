// import Banner from "../components/Banner/Banner"
import FeatureProduct from "../components/FeatureProduct";
import Service from "../components/Service";
import image from "../components/image/banner-bg.jpg";
import serviceData from "./../Data/ServiceData";
import addBanner from "../components/image/banner3.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="banner-section">
        <img src={image} alt="" />
      </div>
      <Service serviceData={serviceData} />
      <FeatureProduct />
      
      <div className="banner-add-section container relative">
        <img
          src={addBanner}
          alt=""
          className=" sm-h-[200px] "
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-md md:text-xl lg:text-2xl xl:text-3xl font-bold text-teal-800 uppercase">
            Happy Shopping
          </h1>
          <h3 className="sm-w-[150px] md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase text-gray-900 mt-2 md:my-4">
            Discount up to 50% off
          </h3>
          <button
            onClick={() => navigate("/product")}
            className="px-3 md:px-5 mt-2 py-1 md:py-2 bg-primary text-white rounded text-base md:text-sm hover:bg-transparent hover:text-primary transition uppercase font-popins"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
