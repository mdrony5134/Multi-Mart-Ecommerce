import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    const {image, name, category, price} = product;
    const navigate = useNavigate()
  return (
    <div>
          <div className="bg-white shadow rounded overflow-hidden ">
            <div className="relative group "  onClick={()=>navigate(`/product/${category}`)}>
            
             <img src={image} className="w-full" alt="" />
             
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                <button
                
                  className="text-white text-lg w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
            
            <div className="flex justify-between py-4 px-5">
              <Link to={`/product/${category}`}>
                <h4 className="uppercase text-lg font-medium hover:text-primary">
                  {name}
                </h4>
              </Link>
              <p className="">{category}</p>
            </div>
            <p className="px-5 mb-3 text-xl text-primary font-semibold font-roboto">
              ${price}
            </p>
            <button className="w-full py-1 bg-primary text-white rounded-b text-lg hover:bg-transparent hover:text-primary transition uppercase font-popins">
              Add to cart
            </button>
          </div>
    </div>
  )
}

export default ProductCard