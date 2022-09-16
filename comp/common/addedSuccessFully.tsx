import { BadgeCheckIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FC } from "react";
import useCart from "../../hooks/useCart";
import TermsAndConditions from "../product-page/termsAndCond";
import Button from "../ui/Button";
import Grid from "../ui/Grid";
import Modal from "../ui/modal";

interface AddedProd {
  collection:string
  id:string
  image:any
  price:number
  prodImages:[] | any
  productType:string
  quantity:number
  rate:number
  slug:string
  title:string
  type:string
  vendor:string
}

interface Pros {
  isOpen:boolean
  setIsOpen:any
  addedProd:AddedProd
}

const AddedSuccessFully: FC<Pros> = ({ setIsOpen, isOpen, addedProd }) => {
  const { totalPrice, totalQuantity } = useCart();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} maxWidth="768px">
      <Grid layout="E">
        <div className="flex flex-col justify-center items-center text-center borer-0 lg:border-r border-solid md:border-r border-b lg:border-b-0 pb-10 lg:pb-0 md:pb-0 md:border-b-0">
          <div className="flex items-center mb-6 gap-2">
            <BadgeCheckIcon className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">
              {" "}
              Added to cart successfully!
            </span>
          </div>
          <div className="relative w-[154px] h-[193px]">
            <Image src={addedProd?.prodImages[0]?.url} layout="fill" />
          </div>
          <div className="leading-7 mt-3">
            <span className="block text-xs font-semibold">
              {addedProd?.title}
            </span>
            <span className="block text-sm my-2 font-semibold">
              QTY: {addedProd?.quantity}
            </span>
            <span className="block text-sm font-semibold">
              TOTAL: ${addedProd?.price}.00
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-y-3 text-sm text-gray items-center text-center">
          <span>
            There are {totalQuantity} items <br /> in your cart{" "}
          </span>
          <span className="font-semibold text-sm">
            TOTAL:{" "}
            <span className="text-primary font-semibold text-xl">
              ${totalPrice}.00
            </span>
          </span>
          <Button full variant="outline">
            CONTINUE SHOPPING
          </Button>
          <Button full variant="outline">
            VIEW CART
          </Button>
          <TermsAndConditions fontSize="xs" />
        </div>
      </Grid>
    </Modal>
  );
};
export default AddedSuccessFully;
