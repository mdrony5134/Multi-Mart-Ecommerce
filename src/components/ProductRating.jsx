import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductRating = ({stars}) => {
    const ratingStar = Array.from({length:5},(value, index) =>{
        let number = index + 0.5;
        return(
            <span key={index}>
                {
                    stars >= index + 1 ?( <FaStar/> ): stars >= number ? (<FaStarHalfAlt/>) : (<FaRegStar/>)
                }
            </span>

        )
    })
  return (
    <div className="flex text-[#ff8c5a] text-xl">
       {ratingStar} 
    </div>
  )
}

export default ProductRating