import Image from "next/image";
import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import {useAppContext} from '../../context/AppContext'
interface Props {
  image: string;
  title: string;
  price: number;
  quantity: number;
  id:string
}
const CartItem: React.FC<Props> = ({ image, title, price, quantity,id }) => {
  const {dispatch} = useAppContext()
  return (
    <div className="singleProd mb-4 group hover:cursor-pointer justify-between flex items-start gap-6">
      <div className="flex gap-6">
      <div className="relative w-[67px] h-20 left">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <div>
        <h2 className="text-sm mb-1 group-hover:text-primary-hover text-font-color">
          {title}
        </h2>
        <h3 className="text-base text-font-color font-semibold">
          <span className="text-gray text-sm">{quantity}x </span>${price}
          .00
        </h3>
      </div>
      </div>
      <div>
        <TrashIcon onClick={()=>{dispatch({type:"REMOVE_CART_ITEM",payload:id})}}/>
      </div>
    </div>
  );
};

export default CartItem;
