import { useFilterProductContext } from "../context/FilterProductProvider"
import GridView from "./GridView"
import ListView from "./ListView"

const ProductList = () => {
    const {filterProducts, gridView} = useFilterProductContext()
     
  if(gridView === true){
    return <GridView products={filterProducts}/>
  }
  if(gridView === false){
    return <ListView products={filterProducts}/>
  }
}

export default ProductList