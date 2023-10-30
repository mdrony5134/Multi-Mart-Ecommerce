import { useProductContext } from "../context/ProductProvider";
import ProductCard from "./ProductCard";

const FeatureProduct = () => {
  const { isLoading, featureProduct } = useProductContext();
  if (isLoading) {
    return <div className="container">loading.....</div>;
  }
  return (
    <div className="container pb-16 ">
      <h2 className="text-2xl font-medium text-gray-500 mb-5 font-popins uppercase">
        Our Feature Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featureProduct?.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
