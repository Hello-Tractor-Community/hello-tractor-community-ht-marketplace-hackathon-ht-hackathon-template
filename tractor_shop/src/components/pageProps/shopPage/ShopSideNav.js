import React from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import location from "./shopBy/location";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <location />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
