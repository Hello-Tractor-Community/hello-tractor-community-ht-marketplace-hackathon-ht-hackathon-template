import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10 px-20">
        <h1 className="max-w-[600px] text-lightText mb-2 text-xl">
          <span className="text-primeColor font-semibold text-lg">Hello Tractor</span>{" "}<br/>
          Hello Tractor is a dedicated platform created to promote and facilitate the buying and selling of second-hand agricultural tractors, implements, spare parts, and agricultural equipment accessories within Kenya. Our mission is to empower farmers by providing them with access to affordable and reliable machinery that can enhance their productivity and efficiency.<br/><br/>
          In a country where agriculture is a vital part of the economy, we understand the challenges that farmers face in acquiring the right equipment. Many farmers have valuable machinery that they no longer use, while others are in desperate need of affordable options. Hello Tractor bridges this gap by connecting sellers with buyers, creating a vibrant marketplace for second-hand agricultural equipment.<br/><br/>
          <span className="text-primeColor font-semibold text-lg">Why Choose Hello Tractor?</span><br/>
          Our platform is designed with the farmer in mind. We offer a user-friendly interface that makes it easy to list and browse available equipment. Whether you are looking to buy a tractor, sell your old implements, or find spare parts, Hello Tractor is your go-to resource.<br/><br/>
          <span className="text-primeColor font-semibold text-lg">Key Benefits:</span><br/>
          <ul className="list-disc list-inside">
            <li>Access to a wide range of second-hand agricultural equipment.</li>
            <li>Affordable pricing to help farmers save costs.</li>
            <li>A community-driven platform that fosters connections between buyers and sellers.</li>
            <li>Support for sustainable farming practices through the reuse of equipment.</li>
          </ul>
          <br/>
          Join us today and be part of a growing community that is transforming the agricultural landscape in Kenya. Together, we can make farming more accessible and efficient for everyone.<br/><br/>
          <span className="text-primeColor font-semibold text-lg">BUY AND SELL NOW!</span>
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;


