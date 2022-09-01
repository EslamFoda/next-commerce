import Image from "next/image";
import { CartIcon } from "../icons";
import Button from "../ui/Button";
import ProdCardGallery from "../common/prodCardGallery";
import Rate from "../common/rate";
import ViewAndWishlist from "../common/viewAndWishlist";

const GridCard = ({ pushTo, selectProd, setSelectedProd, addToCart, prod }) => {
  const { prodImages, vendor, rate, title, price } = prod;
  return (
    <>
      {" "}
      <div className="overflow-hidden group h-[450px] lg:h-[550px] md:h-[550px] sm:h-[550px]">
      
      </div>
    </>
  );
};

export default GridCard;
