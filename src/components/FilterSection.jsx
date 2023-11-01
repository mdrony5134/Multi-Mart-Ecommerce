import { useFilterProductContext } from "../context/FilterProductProvider";

const FilterSection = () => {
  const {
    filters: { text },
    getFilterProduct,
    allProducts,
  } = useFilterProductContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((currValue) => {
      return currValue[property];
    });
    return (newValue = ["All", ...new Set(newValue)]);
    // console.log(newValue);
  };

  const uniqueCategoryData = getUniqueData(allProducts, "category");
  const uniqueCompanyData = getUniqueData(allProducts, "company");
  return (
    <div>
      <div className="col-span-1 bg-white shadow overflow-hidden rounded px-4 pb-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-6 mt-1 border border-black rounded overflow-hidden"
        >
          <input
            className="w-full py-2 px-2"
            type="text"
            name="text"
            value={text}
            onChange={getFilterProduct}
            placeholder="Search Products"
          />
        </form>
        <div className="divide-y divide-gray-200 space-y-5">
          <div>
            <h3 className="text-xl text-gray-800 font-medium uppercase mb-4">
              Category
            </h3>
            <div className="space-y-2">
              <div className="flex flex-col gap-3">
                {uniqueCategoryData.map((currEle, index) => {
                  return (
                    <button
                      className="flex justify-start items-center pl-3"
                      key={index}
                      type="button"
                      name="category"
                      value={currEle}
                      onClick={getFilterProduct}
                    >
                      {currEle}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200 space-y-5">
          <div className="mt-4">
            <h3 className="text-xl text-gray-800 font-medium uppercase mb-4">
              Company
            </h3>
            <select className="w-44 text-sm text-gray-500 py-2 px-4 border border-gray-800 shadow-sm rounded"
            id="company"
            name="company"
            onClick={getFilterProduct}
            >
              {
                uniqueCompanyData.map((currEle, index)=>{
                  return(
                    <option key={index} value={currEle} name="company">{currEle}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <div className="divide-y divide-gray-200 space-y-5">
          <div className="mt-4">
            <button 
            className=" w-full py-2 text-lg bg-primary text-white rounded"

            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
