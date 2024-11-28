import React from "react";
import { useNavigate } from "react-router-dom";


const ProductInfo = ({ productInfo }) => {
  const navigate = useNavigate();
  const handleRequestItem = () => {
    navigate(`/requestitem`);
  };
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">ksh.{productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
        onClick={handleRequestItem}
      >
        Message Owner
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Tractors, Harvesters, Agricultural Equipment Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
