import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import FilterSection from "../components/FilterSection";

const Product = () => {
  return (
    <div>
      <div className="container flex py-4 items-center gap-3">
        <Link to={"/"} className="text-primary text-base">
          <FaHome />
        </Link>
        <span className="text-sm text-gray-400">
          <BsChevronRight />
        </span>
        <p className="text-gray-500 font-medium">Product</p>
      </div>

      {/* product section */}

      <div className="container grid grid-cols-4 pt-4 pb-16 gap-5 items-start font-roboto">
        {/* sidebar */}
       <FilterSection/>

        {/* all product */}
        <div className="col-span-3">
          <Sort/>
         <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default Product;
