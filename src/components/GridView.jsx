import ProductCard from "./ProductCard"

const GridView = ({products}) => {
  console.log({products});
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
    {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
    ))}
  </div>
  )
}

export default GridView