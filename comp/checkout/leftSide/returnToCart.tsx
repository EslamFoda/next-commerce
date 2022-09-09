import { ChevronLeftIcon } from "@heroicons/react/solid";
import Button from "../../ui/Button";
const ReturnToCart = ({ steps, setSteps, address, city, email }) => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="flex cursor-pointer items-center text-primary">
        <ChevronLeftIcon className="h-5 w-5 mt-[1px]" />
        <span className="text-sm"> Return to cart</span>
      </div>
      {steps === 1 && address && city && email ? (
        <Button
          onClick={() => {
            setSteps(2);
          }}
          className="!px-5"
          variant="primary"
        >
          Continue to shipping
        </Button>
      ) : (
        <Button disabled className={`!px-5 ${steps === 1 ? "block" :"hidden"}`} variant="primary">
          Continue to shipping
        </Button>
      )}
      {steps === 2 && address && city && email && (
        <Button
          onClick={() => {
            setSteps(3);
          }}
          className="!px-5"
          variant="primary"
        >
          Continue to payment
        </Button>
      )}
      {steps === 3 && address && city && email && (
        <Button className="!px-5" variant="primary">
          Complete order
        </Button>
      )}
    </div>
  );
};

export default ReturnToCart;
