import { useEffect, useState } from "react";
import TermsAndConditions from "../../product-page/termsAndCond";
import Button from "../../ui/Button";

const SubTotal = ({cart}) => {
  const [totalPrice,setTotalPrice] = useState(0)
  const getTotal = ()=>{
      let total = []
      cart.forEach(item=>{
        total.push(item.price * item.quantity)
      })
     
      let sum = total.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    setTotalPrice(sum)
    }
    useEffect(()=>{
      getTotal()
    },[cart])
  return (
    <div className="border-[1px] self-start border-solid border-gray-border lg:pt-[32px] lg:p-[35px] sm:pt-[32px] pt-[22px] p-[25px]  sm:p-[35px]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-font-color">SUBTOTAL</h3>
        <h3 className="text-base font-semibold text-font-color">${totalPrice}.00</h3>
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
