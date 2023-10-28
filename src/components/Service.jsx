const Service = ({ serviceData }) => {
    return (
      <div className="container py-8 sm:py-16 md:py-16 lg:py-16 xl:py-16">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {serviceData.map((data, index) => (
            <div key={index} className={`border border-primary rounded-sm flex justify-center items-center px-3 py-6 gap-5`} style={{background:`${data.bg}`}}>
              <img src={data.icon} alt="" className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-medium capitalize text-lg">{data.title}</h4>
                <p className="text-gray-500 text-sm">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Service;
  