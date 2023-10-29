
const ProductReducer = (state, action) => {
  
    switch (action.type) {
        case "SET_LOADING":
            return{
              ...state,
              setLoading: true,
            };

      case "SET_API_DATA": 
      // eslint-disable-next-line no-case-declarations
      const featureData = action.payload.filter((product)=>product.featured === true)
            return{
              ...state,
              isLoading:false,
              products:action.payload,
              featureProduct: featureData,
            }

        case "API_ERROR" : 
        return{
          ...state,
          isError: true,
          setLoading: false,
        }
             
    
        default: return state;
             
    }
}

export default ProductReducer