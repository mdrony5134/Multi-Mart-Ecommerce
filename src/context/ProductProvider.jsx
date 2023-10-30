import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from '../Reducer/ProductReducer'

const ProductContext = createContext()
const initialState ={
  isLoading: false,
  isError: false,
  products: [],
  featureProduct: [],
  isSingleLoading: false,
  singleProduct:{}
}
const API = "https://api.pujakaitem.com/api/products"




const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getAllProducts = async(url) =>{
    dispatch({type:"SET_LOADING"})
  try {
      const res = await axios.get(url)
      const products = await res.data;
      dispatch({type:"SET_API_DATA", payload:products})
      // console.log(products)
  } catch (error) {
    dispatch({type:"API_ERROR"})
  }
  
  }

  // single product function

  const getSingleProduct=async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const res = await axios.get(url)
      const product = await res.data
      dispatch({type:"SET_SINGLE_API_DATA", payload:product})
    } catch (error) {
      dispatch({type:"API_ERROR"})
    }
  }
  
  useEffect(()=>{
    getAllProducts(API)
  },[])

  return (
     <ProductContext.Provider value={{...state, getSingleProduct}}>{children}</ProductContext.Provider>
  )
}

// custom hook
const useProductContext = () =>{
  return useContext(ProductContext)
}

 export {ProductContext, ProductProvider, useProductContext}