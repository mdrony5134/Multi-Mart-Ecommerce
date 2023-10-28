import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from '../Reducer/ProductReducer'

const ProductContext = createContext()
const initialState ={
  isLoading: false,
  isError: false,
  products: [],
  featureProduct: [],
}
const API = "https://api.pujakaitem.com/api/products"




const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getAllProducts = async(url) =>{
  try {
      const res = await axios.get(url)
      const products = await res.data;
      dispatch({type:"Set_Api_Data", payload:products})
      // console.log(products)
  } catch (error) {
    dispatch({})
  }
  
  }
  
  useEffect(()=>{
    getAllProducts(API)
  },[])

  return (
     <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

// custom hook
const useProductContext = () =>{
  return useContext(ProductContext)
}

 export {ProductContext, ProductProvider, useProductContext}