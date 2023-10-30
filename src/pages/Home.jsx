// import Banner from "../components/Banner/Banner"
import FeatureProduct from "../components/FeatureProduct";
import Service from "../components/Service";
import serviceData from "./../Data/ServiceData";
import Banner from "../components/Banner";
import AddBanner from "../components/AddBanner";

const Home = () => {
 
  return (
    <div>
      <Banner/>
      <Service serviceData={serviceData} />
      <FeatureProduct />
      <AddBanner/>
    </div>
  );
};

export default Home;
