import Image from "next/image";
import { CartIcon } from "../icons";
import Button from "../ui/Button";
import ProdCardGallery from "../common/prodCardGallery";
import ViewAndWishlist from "../common/viewAndWishlist";
import Rates from "../ui/Rate";

const GridCard = ({ pushTo, selectProd, setSelectedProd, addToCart, prod }) => {
  const { prodImages, vendor, rate, title, price } = prod;
  return (
    <>
      {" "}
      <div className="overflow-hidden group h-[450px] lg:h-[550px] md:h-[550px] sm:h-[550px]">
        <div className="top cursor-pointer  relative h-64 lg:h-96 md:h-96 sm:h-96">
          <Image
            alt={title}
            onClick={pushTo}
            // @ts-ignore
            src={selectProd ? selectProd : prodImages[0].url}
            layout="fill"
            objectFit="cover"
            // @ts-ignore
          />
          <ViewAndWishlist prod={prod} />
        </div>
        <div className="buttom group-hover:translate-y-[-60px] lg:translate-y-0 md:translate-y-0 translate-y-[-60px]  transition duration-300 pt-3 bg-white flex items-center justify-center flex-col gap-1">
          <span className="text-gray-500 transition-all hover:text-primary-hover text-sm">
            {vendor}
          </span>
          <Rates rate={rate}  />
          <span
            onClick={pushTo}
            className="text-center transition-all hover:text-primary-hover cursor-pointer  text-sm"
          >
            {title}
          </span>

          <span className="font-semibold">${price}.00</span>
          <div className="flex gap-3 my-2">
            <ProdCardGallery
              selectProd={selectProd}
              setSelectedProd={setSelectedProd}
              prodImages={prodImages}
            />
          </div>
          <div className="lg:hidden md:hidden block group-hover:block ">
            <Button
              onClick={addToCart}
              icon={<CartIcon />}
              height={40}
              className="!p-4 text-xs"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridCard;
