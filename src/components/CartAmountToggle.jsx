import { FaMinus, FaPlus } from "react-icons/fa"

const CartAmountToggle = ({amount, setDecrees, setIncrease}) => {
  return (
    <div className="mt-6 space-x-6 ml-5">
        <button onClick={()=>setDecrees()}>
            <FaMinus/>
        </button>
        <span className="text-xl text-primary">{amount}</span>
        <button onClick={()=>setIncrease()}>
            <FaPlus/>
        </button>
    </div>
  )
}

export default CartAmountToggle