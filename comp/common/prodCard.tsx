import React from "react";
import Image from "next/image";
import Link from "next/link";
import { QuickView, CartIcon, Wishlist } from "../icons";
import Button from "../ui/Button";
import Rate from "./rate";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import ProdCardGallery from "./prodCardGallery";

interface Props {
  title: string;
  price: number;
  rate?: number;
  image: string;
  vendor: string;
  prodImages?: [];
  slug?: string;
  type?: string;
  prod?: any;
  id:any
}

const ProdCard: React.FC<Props> = ({
  title,
  price,
  rate,
  image,
  vendor,
  prodImages,
  slug,
  prod,
  type,
  id
}) => {
  // @ts-ignore
  const [selectProd, setSelectedProd] = useState(prodImages[0].url);
  const { seenProducts, dispatch } = useAppContext();

  return (
    <div className="overflow-hidden group h-[450px] lg:h-[550px] md:h-[550px] sm:h-[550px]">
      <div className="top relative h-60 lg:h-96 md:h-96 sm:h-96">
        <Image
          // @ts-ignore
          src={selectProd ? selectProd : prodImages[0].url}
          layout="fill"
          objectFit="cover"
          // @ts-ignore
          loading="lazy"
        />
        <div className="z-10 absolute top-3 right-3">
          <div className="bg-white opacity-0 group-hover:opacity-100 cursor-pointer transition duration-300 hover:bg-blue-400  hover:text-white mb-3 h-10 w-10 rounded-full flex justify-center items-center">
            <QuickView />
          </div>
          <div className="bg-white opacity-0 group-hover:opacity-100 cursor-pointer transition duration-300  hover:bg-blue-400 hover:text-white right-0 h-10 w-10 rounded-full flex justify-center items-center">
            <Wishlist />
          </div>
        </div>
      </div>
      <div className="buttom group-hover:translate-y-[-60px] transition duration-300 pt-3 bg-white flex items-center justify-center flex-col gap-1">
        <span className="text-gray-500 text-sm">{vendor}</span>
        <Rate rate={rate} />
        <span
          className="text-center text-sm"
          onClick={() => {
            if(!seenProducts.includes(prod)){
              dispatch({ type: "SET_SEEN", payload: prod });
            }
          }}
        >
          {title}
        </span>
        <span className="font-semibold">${price}.00</span>
        <div className="flex gap-3 my-2">
          {prodImages?.map((prod) => {
            return (
              <ProdCardGallery
                // @ts-ignore
                key={prod.id}
                prod={prod}
                selectProd={selectProd}
                setSelectedProd={setSelectedProd}
              />
            );
          })}
        </div>
        <div className="hidden group-hover:block ">
          <Button icon={<CartIcon />} height={40} style={{ padding: "0 15px" }}>
            <Link href={`/collections/${type}/${slug}`}>ADD TO CART</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProdCard;
