import { useNavigate } from "react-router-dom";
import FormatNumber from "./Helper/FormatNumber";

const ListView = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className="container w-full mt-10">
      {products.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <div key={id} className="flex gap-14 items-center shadow-md overflow-hidden rounded mb-10">
            <figure className="flex w-full justify-center items-center">
              <img src={image} alt={image.file} />
            </figure>
            <div>
              <h3 className="text-3xl font-medium text-gray-800 mb-4">{name}</h3>
              <p className="text-primary mb-2 font-semibold">
                <FormatNumber price={price} />
              </p>
              <p className="text-md">{description.slice(0, 90)}...</p>
              <button
                onClick={() => navigate(`/product/${id}`)}
                className="px-3 overflow-hidden py-2 mt-8 bg-primary text-white rounded-md text-md hover:bg-transparent hover:text-primary transition uppercase font-popins"
              >
                Product Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
