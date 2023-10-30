import { BsChevronRight } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const PageNavigation = ({name}) => {
  return (
    <div>
          <div className="container flex py-5 items-center gap-3">
        <Link to={"/"} className="text-primary text-base">
          <FaHome />
        </Link>
        <span className="text-sm text-gray-400">
          <BsChevronRight />
        </span>
        <Link to={"/product"} className="text-primary font-medium">Product</Link>
        <span className="text-sm text-gray-400">
          <BsChevronRight />
        </span>
        <p className="text-gray-600 font-medium capitalize">{name}</p>
      </div>
    </div>
  )
}

export default PageNavigation