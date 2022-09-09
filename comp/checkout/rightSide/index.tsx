import React from "react";
import CheckoutProducts from "./checkoutProducts";
import SubTotalAndTotal from "./subTotalAndTotal";
import CheckoutCollapse from "./checkoutCollapse";
const RightSide = () => {
  return (
    <>
      <div className="hidden lg:block md:block ">
        <CheckoutProducts />
        <SubTotalAndTotal />
      </div>
      <div className="block px-4 lg:hidden md:hidden border border-gray-border border-solid">
        <CheckoutCollapse />
      </div>
    </>
  );
};

export default RightSide;
