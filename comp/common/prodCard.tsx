import React from "react";
import Image from "next/image";
import { CartIcon } from "../icons";
import Button from "../ui/Button";
import Rate from "./rate";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import ProdCardGallery from "./prodCardGallery";
import ViewAndWishlist from "../common/viewAndWishlist";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { cart, dispatch } = useAppContext();
  const addToCart = () => {
    const existProduct = cart.find((item) => prod.id === item.id);
    if (existProduct) {
      const newQuantity = (existProduct.quantity += 1);
      const product = { ...prod, quantity: newQuantity };
      dispatch({ type: "REMOVE_CART_ITEM", payload: product.id });
      dispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      const product = { ...prod, quantity: 1 };
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
    // dispatch({ type: "UPDATE_EXIST_CART_ITEM", payload: prod.id });
  };
  const pushTo = (e) => {
    e.preventDefault();
    router.push(`/collections/${type}/${slug}`);
  };
  return (
    <div className="overflow-hidden group h-[450px] lg:h-[550px] md:h-[550px] sm:h-[550px]">
      <div className="top cursor-pointer  relative h-60 lg:h-96 md:h-96 sm:h-96">
        <Image
          onClick={pushTo}
          // @ts-ignore
          src={selectProd ? selectProd : prodImages[0].url}
          layout="fill"
          objectFit="cover"
          // @ts-ignore
          loading="lazy"
        />
        <ViewAndWishlist prod={prod} />
      </div>
      <div className="buttom group-hover:translate-y-[-60px] transition duration-300 pt-3 bg-white flex items-center justify-center flex-col gap-1">
        <span className="text-gray-500 transition-all hover:text-primary-hover text-sm">
          {vendor}
        </span>
        <Rate rate={rate} />

        <span
          onClick={pushTo}
          className="text-center transition-all hover:text-primary-hover cursor-pointer text-sm"
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
          <Button
            onClick={addToCart}
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
