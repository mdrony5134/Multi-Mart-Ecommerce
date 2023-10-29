import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import {BsFillGridFill} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import ProductList from "../components/ProductList";

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
        <div className="col-span-1 bg-white shadow overflow-hidden rounded px-4 pb-6">
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 font-medium uppercase mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <div className="flex flex-col gap-3">
                  <a href="#">All</a>
                  <a href="#">Mobile</a>
                  <a href="#">Laptop</a>
                  <a href="#">Computer</a>
                  <a href="#">Accessories</a>
                  <a href="#">Watch</a>
                </div>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 space-y-5">
            <div className="mt-4">
              <h3 className="text-xl text-gray-800 font-medium uppercase mb-4">
                Company
              </h3>
              <select className="w-44 text-sm text-gray-500 py-2 px-4 border border-gray-800 shadow-sm rounded">
                <option value="all">All</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Nokia">Nokia</option>
                <option value="Dell">Dell</option>
                <option value="Asus">Asus</option>
                <option value="Rolex">Rolex</option>
              </select>
            </div>
          </div>

          <div className="divide-y divide-gray-200 space-y-5">
            <div className="mt-4">
             <button className=" w-full py-2 text-lg bg-primary text-white rounded">Clear Filter</button>
            </div>
          </div>
        </div>

        {/* all product */}
        <div className="col-span-3">
         <div className="flex justify-between items-center mb-4">
         <select className="w-44 text-sm text-gray-500 py-2 px-4 border border-gray-800 shadow-sm rounded">
            <option>Default Sorting</option>
            <option>Price High-Low</option>
            <option>Price Low-High</option>
            <option>A - Z</option>
            <option>Z - A</option>
          </select>
          <div><h2>Total Product </h2></div>
          <div className="flex gap-2">
            <div className="w-9 h-8 border cursor-pointer bg-primary flex items-center justify-center text-white rounded "> 
              <BsFillGridFill/>
            </div>
            <div className="w-9 h-8 border cursor-pointer bg-white flex items-center justify-center rounded active:bg-primary"> 
              <FiMenu/>
            </div>
          </div>
         </div>
         <ProductList/>
        </div>
      </div>
    </div>
  );
};

export default Product;
