import { useState } from "react";

const ProductImage = ({ image = [{url: " " }] }) => {
    const [mainImage, setMainImage] = useState(image[0])
  return (
    <div>
      <img src={mainImage.url} alt={image.filename} className="w-full" />
      <div className="grid grid-cols-4 gap-5 mt-4">
        {image.map((currValue, index) => (
          <figure key={index}>
            <img 
            src={currValue.url} 
            alt={currValue.filename} 
            onClick={()=>setMainImage(currValue)}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
