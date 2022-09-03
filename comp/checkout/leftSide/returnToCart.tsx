import { ChevronLeftIcon } from "@heroicons/react/solid";
import Button from "../../ui/Button";
const ReturnToCart = () => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="flex cursor-pointer items-center text-primary">
        <ChevronLeftIcon className="h-5 w-5 mt-[1px]" />
        <span className="text-sm"> Return to cart</span>
      </div>
      <Button className="!px-5" variant="primary">Continue to shipping</Button>
    </div>
  );
};

export default ReturnToCart;
