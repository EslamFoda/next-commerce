import { Wishlist, QuickView } from "../icons";
import Tooltip from "../ui/tooltip";
import Modal from "../ui/modal";
import Image from "next/image";
import { useState } from "react";
import Grid from "../ui/Grid";
import ProdDetails from "../product-page/prodDetails";
import Counter from "../product-page/counterWithBtn";
import ProductType from "../product-page/prdductType";
import ProductModal from "./productModal";
const ViewAndWishlist = ({ prod }) => {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="z-10 absolute top-3 right-3">
        <Tooltip className="-ml-1" placement="left-center" text="Quick View">
          <div
            onClick={openModal}
            className="bg-white opacity-0 group-hover:opacity-100 cursor-pointer transition duration-300 hover:bg-blue-400  hover:text-white mb-3 h-10 w-10 rounded-full flex justify-center items-center"
          >
            <QuickView />
          </div>
        </Tooltip>
        <div className="bg-white opacity-0 group-hover:opacity-100 cursor-pointer transition duration-300  hover:bg-blue-400 hover:text-white right-0 h-10 w-10 rounded-full flex justify-center items-center">
          <Wishlist />
        </div>
      </div>
      <Modal maxWidth="1024px" isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProductModal prod={prod}/>
      </Modal>
    </>
  );
};

export default ViewAndWishlist;
