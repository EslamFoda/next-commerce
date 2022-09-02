import TermsAndConditions from "../../product-page/termsAndCond";
import useCart from "../../../hooks/useCart";
import Button from "../../ui/Button";

const SubTotal = () => {
  const { totalPrice } = useCart();

  return (
    <div className="border-[1px] self-start border-solid border-gray-border lg:pt-[32px] lg:p-[35px] sm:pt-[32px] pt-[22px] p-[25px]  sm:p-[35px]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-font-color">SUBTOTAL</h3>
        <h3 className="text-base font-semibold text-font-color">
          ${totalPrice}.00
        </h3>
      </div>
      <div className="flex items-center justify-between mt-5">
        <h3 className="text-base font-semibold text-font-color">GRAND TOTAL</h3>
        <h3 className="text-xl font-semibold text-primary">${totalPrice}.00</h3>
      </div>
      <TermsAndConditions />
      <Button className="mt-4 lg:text-base sm:text-base text-xs" full>
        PROCEED TO CHECKOUT
      </Button>
    </div>
  );
};
export default SubTotal;
