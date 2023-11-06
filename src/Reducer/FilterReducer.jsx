const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      const productPrice = action.payload.map((currEle) => currEle.price);
      // const maxPrice = Math.max.apply(null, price)
      const maxPrice = Math.max(...productPrice);
      console.log(maxPrice);
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };
    case "GET_SORTING_VALUE":
      // const userShortValue = document.getElementById("sort")
      // const shortedValue = userShortValue.options[userShortValue.selectedIndex].value
      // console.log(shortedValue);
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCT":
      // eslint-disable-next-line no-case-declarations
      let newProducts;
      // eslint-disable-next-line no-case-declarations
      const { filterProducts, sortingValue } = state;
      // eslint-disable-next-line no-case-declarations
      let temProduct = [...filterProducts];

      // eslint-disable-next-line no-case-declarations
      const sortingProduct = (a, b) => {
        if (sortingValue === "A-Z") {
          return a.name.localeCompare(b.name);
        }
        if (sortingValue === "Z-A") {
          return b.name.localeCompare(a.name);
        }
        if (state.sortingValue === "lowest") {
          return a.price - b.price;
        }
        else{
          return b.price - a.price;
        }
      };

      newProducts = temProduct.sort(sortingProduct);

      return {
        ...state,
        filterProducts: newProducts,
      };

    case "FILTERS_PRODUCT":
      // eslint-disable-next-line no-case-declarations
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "UPDATE_FILTERS_PRODUCT":
      const { allProducts } = state;
      let temFilterProducts = [...allProducts];
      const { text, category, company, colors, price } = state.filters;

      if (text) {
        temFilterProducts = temFilterProducts.filter((currEle) => {
          return currEle.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        temFilterProducts = temFilterProducts.filter(
          (currElement) => currElement.category === category
        );
      }

      if (company !== "All") {
        temFilterProducts = temFilterProducts.filter(
          (currElement) =>
            currElement.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (colors !== "All") {
        temFilterProducts = temFilterProducts.filter((currElement) =>
          currElement.colors.includes(colors)
        );
      }

      if (price === 0) {
        temFilterProducts = temFilterProducts.filter(
          (currEle) => currEle.price == price
        );
      } else {
        temFilterProducts = temFilterProducts.filter(
          (currEle) => currEle.price <= price
        );
      }

      return {
        ...state,
        filterProducts: temFilterProducts,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
         ...state.filters,
          text: "",
          category: "All",
          company: "All",
          colors: "All",
          maxPrice: state.filters.maxPrice,
          minPrice:  state.filters.minPrice,
          price: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
