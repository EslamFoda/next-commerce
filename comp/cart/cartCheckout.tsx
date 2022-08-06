import React from "react";
import TermsAndConditions from "../product-page/termsAndCond";
import Button from "../ui/Button";
import Link from "next/link";
interface Props {
  total: number;
}
const CartCheckout: React.FC<Props> = ({ total }) => {
  return (
    <div className="checkout-contianer border-t-[1px] border-solid border-[#e9e7e7] border-0 py-2">
      <div className="total-container flex items-center justify-between">
        <span className="text-font-color text-sm font-semibold">TOTAL:</span>
        <span className="text-font-color] text-base font-semibold">
          ${total}.00
        </span>
      </div>
      <TermsAndConditions fontSize="xs" />
      <Button className="my-3" height={40} full>
        PROCEED TO CHECKOUT
      </Button>
      <div className="w-full text-center">
        <Link href="/cart">
          <span className="text-primary cursor-pointer hover:text-black transition-all">
            VIEW CART
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
