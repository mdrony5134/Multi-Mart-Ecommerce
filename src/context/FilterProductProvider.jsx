import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductProvider";
import reducer from "../Reducer/FilterReducer";

export const FilterProductContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
  },
};

export const FilterProductProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "GET_SORTING_VALUE", payload: userValue });
  };

  // Filter function

  const getFilterProduct = (event) => {
        let name = event.target.name;
        let value = event.target.value;

    dispatch({type:"FILTERS_PRODUCT", payload:{name, value}})
  };

  useEffect(() => {
    dispatch({type:"UPDATE_FILTERS_PRODUCT"})
    dispatch({ type: "SORTING_PRODUCT" });
  }, [state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);
  return (
    <FilterProductContext.Provider
      value={{ ...state, setGridView, setListView, sorting, getFilterProduct }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

// custom hook
export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};
