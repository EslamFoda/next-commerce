import Link from "next/link";
import Button from "../ui/Button";
import { HeartIcon } from "@heroicons/react/outline";

const EmptyWishList = () => {
  return (
    <div
      className={`flex flex-col justify-center gap-0 items-center space-y-4 h-[75vh]`}
    >
      <h1 className="lg:text-4xl md:text-4xl text-2xl text-font-color font-semibold">
        WISHLIST
      </h1>
      <div className="relative">
        <div className="h-full rotate-[60deg] w-1 absolute m-auto left-0 right-0  bg-black"></div>
        <HeartIcon className="w-12 h-12 text-gray" />
      </div>
      <p className="text-gray lg:text-2xl md:text-xl text-lg">
        No products were added to the wishlist
      </p>
      <Link href="/">
        <Button className="px-8" height={40}>
          CONTINUE SHOPPING
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWishList;
