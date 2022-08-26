import { EmptyCartIcon } from "../icons";
import Button from "../ui/Button";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/outline";
const Empty = ({ emptyCart = false }) => {
  return (
    <div
      className={`flex flex-col justify-center gap-0 items-center ${
        emptyCart ? "h-[25vh]" : "h-[85vh]"
      }`}
    >
      {emptyCart ? (
        <>
          <ShoppingBagIcon className="!w-10 !h-10 text-gray-border hover:!text-gray-border" />
          <span className="text-sm block mt-3 text-gray">
            No Products in the Cart
          </span>
        </>
      ) : (
        <>
          <EmptyCartIcon />
          <h1 className="lg:text-4xl md:text-4xl text-2xl text-font-color font-semibold">
            SHOPPING CART IS EMPTY
          </h1>
          <p className="text-gray lg:text-base md:text-base text-sm mt-2 mb-8">
            You have no items in your shopping cart.
          </p>
          <Link href="/">
            <Button height={45}>CONTINUE SHOPPING</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Empty;
