import { AiOutlineHeart } from "react-icons/ai";
import { useProductContext } from "../context/ProductProvider";
import { Link, useNavigate} from "react-router-dom";

const FeatureProduct = () => {
  const navigate = useNavigate();
  const { isLoading, featureProduct } = useProductContext();
  // if (isLoading) {
  //   return <div>loading.....</div>;
  // }
  return (
    <div className="container pb-16 ">
      <h2 className="text-2xl font-medium text-gray-500 mb-5 font-popins uppercase">
        Our Feature Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featureProduct.map((product, index) => (
          <div className="bg-white shadow rounded overflow-hidden " key={index}>
            <div className="relative group "  onClick={()=>navigate(`/product/${product.category}`)}>
            
             <img src={product.image} className="w-full" alt="" />
             
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                <button
                
                  className="text-white text-lg w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
            <div className="flex justify-between py-4 px-5">
              <Link to={`/product/${product.category}`}>
                <h4 className="uppercase text-lg font-medium hover:text-primary">
                  {product.name}
                </h4>
              </Link>
              <p className="">{product.category}</p>
            </div>
            <p className="px-5 mb-3 text-xl text-primary font-semibold font-roboto">
              ${product.price}
            </p>
            <button className="w-full py-1 bg-primary text-white rounded-b text-lg hover:bg-transparent hover:text-primary transition uppercase font-popins">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
