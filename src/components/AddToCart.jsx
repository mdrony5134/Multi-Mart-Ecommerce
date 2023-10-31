import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate()


  const setDecrees = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="flex space-x-2 items-center mt-4">
        <p className=" text-gray-600 font-semibold">
          Color:
          {colors.map((currColor, index) => {
            return (
              <button
                className={`w-4 h-4 align-middle border-none rounded-full outline-none ml-3 ${
                  color === currColor
                    ? "bg-black active:opacity-100"
                    : "opacity-50"
                }`}
                style={{ backgroundColor: currColor }}
                key={index}
                onClick={() => setColor(currColor)}
              >
                {color === currColor ? (
                  <FaCheck className="text-gray-200 text-sm" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrees={setDecrees}
        setIncrease={setIncrease}
      />

      <button
        onClick={() => navigate("/cart")}
        className="px-4 py-2 mt-4 bg-primary text-white rounded-md text-lg hover:bg-transparent hover:text-primary transition uppercase font-popins"
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
