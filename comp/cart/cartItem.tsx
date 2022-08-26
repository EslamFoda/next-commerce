import Image from "next/image";
import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import Link from "next/link";
interface Props {
  image: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
  type: string;
  slug: string;
  setIsCartOpen?: any;
}
const CartItem: React.FC<Props> = ({
  image,
  title,
  price,
  quantity,
  id,
  slug,
  type,
  setIsCartOpen,
}) => {
  const { dispatch } = useAppContext();
  return (
    <div className="singleProd mb-4 mt-2 group hover:cursor-pointer justify-between flex items-start gap-6">
      <div className="flex gap-6">
        <Link href={`/collections/${type}/${slug}`}>
          <div
            onClick={() => {
              if (setIsCartOpen) {
                setIsCartOpen(false);
              }
            }}
            className="relative w-[67px] h-20 left"
          >
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
        </Link>
        <div>
          <Link href={`/collections/${type}/${slug}`}>
            <h2
              onClick={() => {
                if (setIsCartOpen) {
                  setIsCartOpen(false);
                }
              }}
              className="text-sm mb-1 group-hover:text-primary-hover text-font-color"
            >
              {title}
            </h2>
          </Link>
          <h3 className="text-base text-font-color font-semibold">
            <span className="text-gray text-sm">{quantity}x </span>${price}
            .00
          </h3>
        </div>
      </div>
      <div>
        <TrashIcon
          className="w-5 h-5"
          onClick={() => {
            dispatch({ type: "REMOVE_CART_ITEM", payload: id });
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
