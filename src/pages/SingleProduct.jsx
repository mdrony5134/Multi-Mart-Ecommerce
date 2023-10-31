import { useEffect } from "react";
import { useProductContext } from "../context/ProductProvider";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import ProductImage from "../components/ProductImage";
import FormatNumber from "./../components/Helper/FormatNumber";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import ProductRating from "../components/ProductRating";
import AddToCart from "../components/AddToCart";

const SingleProduct = () => {
  const API = " https://api.pujakaitem.com/api/products";
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();

  const {
    id: aliace,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  const { id } = useParams();

 

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <div>
      <PageNavigation name={name} />
      <div className="grid grid-cols-2 gap-8 pb-14 container">
        {/* image */}
        <div>
          <ProductImage image={image} />
        </div>
        {/* product details */}

        <div>
          <h2 className="text-3xl uppercase text-gray-800">{name}</h2>
          <div className="flex gap-2 items-center mb-4">
            <div>
              <ProductRating stars={stars} />
            </div>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability:</span>
              <span
                className="uppercase"
                style={{ color: stock > 0 ? "green" : "red" }}
              >
                {stock > 0 ? "In stock" : "Not Available"}
              </span>
            </p>

            <p className="text-gray-800 space-x-2">
              <span className="font-semibold">Brand:</span>
              <span className="text-gray-600">{company}</span>
            </p>

            <p className="text-gray-800 space-x-2">
              <span className="font-semibold">Category:</span>
              <span className="text-gray-600">{category}</span>
            </p>
            <p className="text-gray-800 space-x-2">
              <span className="font-semibold">Price:</span>
              <span className="text-primary font-semibold">
                <FormatNumber price={price} />
              </span>
              <span className="text-gray-500 text-base">
                <del>
                  <FormatNumber price={price + 250000} />
                </del>
              </span>
            </p>
          </div>
          <p className="mt-4 text-gray-600">{description}</p>

          <div className="w-full flex items-center justify-between mt-9 border-b-2">
            <div>
              <TbTruckDelivery className=" bg-gray-300 w-11 h-11 flex items-center justify-center rounded-full p-1" />
              <p className="text-gray-500 my-2">Free Delivery</p>
            </div>
            <div>
              <TbReplace className="text-2xl bg-gray-300 w-11 h-11 flex items-center justify-center rounded-full p-1" />
              <p className="text-gray-500 my-2">30 Days Replacement</p>
            </div>
            <div>
              <TbTruckDelivery className="text-2xl bg-gray-300 w-11 h-11 flex items-center justify-center rounded-full p-1" />
              <p className="text-gray-500 my-2">Fast Delivery</p>
            </div>
            <div>
              <MdSecurity className="text-2xl bg-gray-300 w-11 h-11 flex items-center justify-center rounded-full p-1" />
              <p className="text-gray-500 my-2">Free Delivery</p>
            </div>
          </div>
          {stock > 0 && <AddToCart product={singleProduct} />}

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
