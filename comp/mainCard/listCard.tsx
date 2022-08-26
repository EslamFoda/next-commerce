import Image from "next/image";
import { CartIcon } from "../icons";
import Button from "../ui/Button";
import ProdCardGallery from "../common/prodCardGallery";
import Rate from "../common/rate";
import ViewAndWishlist from "../common/viewAndWishlist";

const ListCard = ({ pushTo, selectProd, setSelectedProd, addToCart, prod }) => {
  const { prodImages, vendor, rate, title, price } = prod;
  return (
    <>
      {" "}
      <div className="flex gap-4 justify-between border-0 border-t border-gray-border py-4">
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row  lg:gap-7 md:gap-7 sm:gap-7 gap-2">
          <div className="top cursor-pointer relative  h-[220px]   w-[167px]">
            <Image
              onClick={pushTo}
              // @ts-ignore
              src={selectProd ? selectProd : prodImages[0].url}
              layout="fill"
              objectFit="cover"
              // @ts-ignore
              loading="lazy"
            />
          </div>

          <div>
            <span className="text-gray transition-all uppercase  hover:text-primary-hover text-xs">
              {vendor}
            </span>
            <div className="my-1">
              <Rate size={4} rate={rate} />
            </div>
            <span
              onClick={pushTo}
              className="text-center transition-all hover:text-primary-hover cursor-pointer font-semibold text-sm"
            >
              {title}
            </span>
            <span className="font-semibold block">${price}.00</span>
            <p className="max-w-lg text-sm font-normal text-gray mt-3 mb-4">
              We are proud to present our best premium Shopify theme - Wokiee.
              This is multi-purpose software that can be used for any type of
              the store. Great variety of available...
            </p>
            <div className="flex gap-3 my-2">
              <ProdCardGallery
                selectProd={selectProd}
                setSelectedProd={setSelectedProd}
                prodImages={prodImages}
              />
            </div>
            <div className="text-end  flex-col flex lg:hidden md:hidden mt-4 gap-y-5">
              <Button
                onClick={addToCart}
                icon={<CartIcon />}
                height={40}
                className="!px-4 w-max"
              >
                ADD TO CART
              </Button>
              <ViewAndWishlist list={true} prod={prod} />
            </div>
          </div>
        </div>
        <div className="text-end  flex-col hidden lg:flex md:flex gap-y-5">
          <span className="font-semibold text-xl">${price}.00</span>
          <Button
            onClick={addToCart}
            icon={<CartIcon />}
            height={40}
            className="!px-4 w-max"
          >
            ADD TO CART
          </Button>
          <ViewAndWishlist list={true} prod={prod} />
        </div>
      </div>
    </>
  );
};
export default ListCard;
