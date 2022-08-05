import TermsAndConditions from "../../product-page/termsAndCond";
import Button from "../../ui/Button";

const SubTotal = ({cart}) => {
    console.log(cart,'cart')
  return (
    <div className="border-[1px] self-start border-solid border-gray-border pt-[32px] pr-[35px] pb-[35px] pl-[35px]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-font-color">SUBTOTAL</h3>
        <h3 className="text-base font-semibold text-font-color">$1,460.00</h3>
      </div>
      <div className="flex items-center justify-between mt-5">
        <h3 className="text-base font-semibold text-font-color">GRAND TOTAL</h3>
        <h3 className="text-xl font-semibold text-primary">$1,460.00</h3>
      </div>
      <TermsAndConditions />
      <Button className="mt-4" full>
        PROCEED TO CHECKOUT
      </Button>
    </div>
  );
};
export default SubTotal;
