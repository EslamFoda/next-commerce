import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import Modal from "../ui/modal";
import Button from "../ui/Button";
import { useAppContext } from "../../context/AppContext";
const ContinueOrClear = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useAppContext();
  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <>
      <div className="flex lg:items-end md:items-end items-center lg:flex-row md:flex-row flex-col-reverse gap-y-3 my-10 lg:justify-between md:justify-between justify-center">
        <Link href="/">
          <div className="flex items-center gap-2 hover:text-font-color transition-all text-primary cursor-pointer">
            <ArrowLeftIcon className="h-4 w-4" /> <h3 className="text-sm">CONTINUE SHOPPING</h3>
          </div>
        </Link>
        <div
          onClick={openModel}
          className="flex items-center gap-2 hover:text-font-color transition-all text-primary cursor-pointer"
        >
          <TrashIcon className="h-4 w-4" /> <h3 className="text-sm">CLEAR SHOPPING CART </h3>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} maxWidth="576px">
        <div className="text-center">
          <span className="text-font-color">
            Are you sure you want to clear the shopping cart ?
          </span>
          <div className="flex items-center justify-between mt-10">
            <Button onClick={clearCart} className="font-semibold">
              yes
            </Button>
            <Button
              onClick={closeModel}
              className="font-semibold"
              variant="outline"
            >
              no
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ContinueOrClear;
