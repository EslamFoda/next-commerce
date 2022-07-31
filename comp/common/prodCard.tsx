import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "../icons";
import Button from "../ui/Button";
import Rate from "./rate";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import ProdCardGallery from "./prodCardGallery";
import { useRouter } from "next/router";
import ViewAndWishlist from "../common/viewAndWishlist";

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
  id: any;
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
  id,
}) => {
  // @ts-ignore
  const [selectProd, setSelectedProd] = useState(prodImages[0].url);
  const {  dispatch } = useAppContext();
  const router = useRouter();
  const { slug: slugg } = router.query;
  return (
    <div className="overflow-hidden group h-[450px] lg:h-[550px] md:h-[550px] sm:h-[550px]">
      <div className="top cursor-pointer  relative h-60 lg:h-96 md:h-96 sm:h-96">
        <Link href={`/collections/${type}/${slug}`}>
          <Image
            // @ts-ignore
            src={selectProd ? selectProd : prodImages[0].url}
            layout="fill"
            objectFit="cover"
            // @ts-ignore
            loading="lazy"
          />
        </Link>
        <ViewAndWishlist prod={prod} />
      </div>
      <div className="buttom group-hover:translate-y-[-60px] transition duration-300 pt-3 bg-white flex items-center justify-center flex-col gap-1">
        <span className="text-gray-500 transition-all hover:text-primary-hover text-sm">
          {vendor}
        </span>
        <Rate rate={rate} />
        <Link href={`/collections/${type}/${slug}`}>
          <span className="text-center transition-all hover:text-primary-hover cursor-pointer text-sm">
            {title}
          </span>
        </Link>
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
          <Button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: prod });
            }}
            icon={<CartIcon />}
            height={40}
            style={{ padding: "0 15px" }}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProdCard;
