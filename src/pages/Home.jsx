// import Banner from "../components/Banner/Banner"
import Service from '../components/Service'
import image from '../components/image/banner-bg.jpg'
import serviceData from './../Data/ServiceData';
 

const Home = () => {
  return (
     <div>
        <div className="banner-section">
          <img src={image} alt="" />
        </div>
        <Service serviceData={serviceData}/>
     </div>
  )
}

export default Home