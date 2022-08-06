import Image from "next/image";
import Counter from "./counter";
import { TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
const CartProduct = ({ item, price, title, quantity, image }) => {
  const { dispatch } = useAppContext();

  const removeProduct = () => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: item.id });
  };

  return (
    <>
      <div className="py-3 border-t-[1px] last:border-y-[1px] last:border-solid last:border-gray-border last:border-0 border-solid border-0 lg:text-base md:text-base text-sm border-gray-border grid grid-cols-3 md:grid-cols-6 sm:grid-cols-3 lg:grid-cols-6 items-center">
        <div className="flex gap-3 col-span-2 items-center">
          <div
            style={{ flex: "none" }}
            className="image-cont relative h-[125px] w-[100px]"
          >
            <Image
              src={image.url}
              alt="prod image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="hidden lg:block md:block sm:hidden">{title}</h3>
          <div className="lg:hidden flex md:hidden sm:flex flex-col gap-y-3">
            <h3>{title}</h3>
            <Counter dispatch={dispatch} item={item} quantity={quantity} />
            <h3 className="">${price}.00</h3>
          </div>
        </div>

        <h3 className="justify-self-center lg:block md:block sm:hidden hidden">
          ${price}.00
        </h3>
        <div className="justify-self-center lg:block md:block sm:hidden hidden">
          <Counter dispatch={dispatch} item={item} quantity={quantity} />
        </div>

        <h3 className="justify-self-center lg:block md:block sm:hidden hidden">
          ${price * quantity}.00
        </h3>
        <div className="justify-self-end self-baseline lg:self-center lg:justify-self-center md:justify-self-center md:self-center">
          <TrashIcon
            onClick={removeProduct}
            className=" mt-1 w-5 h-5 cursor-pointer hover:text-primary-hover"
          />
        </div>
      </div>
    </>
  );
};
export default CartProduct;
