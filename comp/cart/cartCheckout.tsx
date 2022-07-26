import React from "react";
import TermsAndConditions from "../product-page/termsAndCond";
import Button from "../ui/Button";
import Link from "next/link";
import useCart from "../../hooks/useCart";

const CartCheckout = () => {
  
  const { totalPrice } = useCart();

  return (
    <div className="checkout-contianer border-t-[1px] border-solid border-[#e9e7e7] border-0 py-2">
      <div className="total-container flex items-center justify-between">
        <span className="text-font-color lg:text-sm sm:text-sm text-xs font-semibold">
          TOTAL:
        </span>
        <span className="text-font-color] lg:text-base sm:text-base text-sm font-semibold">
          ${totalPrice}.00
        </span>
      </div>
      <TermsAndConditions fontSize="xs" />
      <div className="w-full text-center">
        <Link href="/cart">
          <span className="text-primary cursor-pointer lg:text-base sm:text-base text-sm hover:text-black transition-all">
            VIEW CART
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
