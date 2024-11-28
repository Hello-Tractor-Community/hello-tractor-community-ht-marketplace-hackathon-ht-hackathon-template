import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#686868] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc={productOfTheYear}
          width={50}
          height={50}
        />
       <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-[#ff461e]"> {/* Updated color */}
            Product of The Year
          </h1>
          <p className="text-base font-normal text-[#ff461e] max-w-[600px] mr-4"> {/* Updated color */}
            The PRECISION ONE tractor is versatile and reliable for all your farming needs. Priced at 52,000.00.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
