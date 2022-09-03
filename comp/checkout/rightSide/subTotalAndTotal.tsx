import useCart from "../../../hooks/useCart";
const SubTotalAndTotal = () => {
  const { totalPrice } = useCart();
  return (
    <>
      <div className="flex flex-col gap-y-2 text-sm text-font-color border-0 border-t border-b border-gray-border py-4">
        <div className="flex items-center  justify-between">
          <span>Subtotal</span>
          <span>${totalPrice}.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>$20.00</span>
        </div>
      </div>
      <div className="flex mt-4 items-center text-font-color justify-between">
        <span>Total</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray">USD </span>
          <span className="text-xl font-semibold">${totalPrice + 20}.00 </span>
        </div>
      </div>
    </>
  );
};

export default SubTotalAndTotal;
