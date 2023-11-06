import { useEffect, useState } from "react";

const ProductImage = ({ image = [{url: "" }] }) => {

    const [mainImage, setMainImage] = useState(null)

    // useEffect(()=>{

    // },[])

  return (
    <div>
      {
        mainImage ?  <img src={mainImage} alt="image" className="w-full" /> :  <img src={image[0].url} alt="image" className="w-full" />
      }
     
      <div className="grid grid-cols-4 gap-5 mt-4">
        {image.map((currValue, index) => (
          <figure key={index}>
            <img 
            src={currValue.url} 
            alt={currValue.filename} 
            onClick={()=>setMainImage(currValue.url)}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
