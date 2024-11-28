import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 111149.99,
    },
    {
      _id: 951,
      priceOne: 111150.0,
      priceTwo: 111199.99,
    },
    {
      _id: 952,
      priceOne: 111100.0,
      priceTwo: 111199.99,
    },
    {
      _id: 953,
      priceOne: 111200.0,
      priceTwo: 111399.99,
    },
    {
      _id: 954,
      priceOne: 111400.0,
      priceTwo: 111599.99,
    },
    {
      _id: 955,
      priceOne: 111600.0,
      priceTwo: 1111000.0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              ksh{item.priceOne.toFixed(2)} - ksh{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
