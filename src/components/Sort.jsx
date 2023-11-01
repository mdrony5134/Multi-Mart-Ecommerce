import { BsFillGridFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useFilterProductContext } from "../context/FilterProductProvider";

const Sort = () => {
  const { gridView, setGridView, setListView, sorting, filterProducts } = useFilterProductContext();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <select className="w-44 text-sm  text-gray-500 py-2 px-4 border border-gray-800 shadow-sm rounded" id="sort" onClick={sorting}>
          <option value="highest">Default Sorting</option>
          <option value="highest">Price High-Low</option>
          <option value="lowest">Price Low-High</option>
          <option value="A-Z">A - Z</option>
          <option value="Z-A">Z - A</option>
        </select>
        <div>
          <h2 className="text-lg text-gray-600">{`${filterProducts.length} Products Available `}</h2>
        </div>
        <div className="flex gap-2">
          <button
            className={`w-9 h-8 border cursor-pointer flex items-center justify-center rounded ${
              gridView ? "bg-primary text-white" : "bg-white text-black"
            }`}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            className={`w-9 h-8 border cursor-pointer flex items-center justify-center rounded ${
              !gridView ? "bg-primary text-white" : "bg-white text-black"
            }`}
            onClick={setListView}
          >
            <FiMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sort;
