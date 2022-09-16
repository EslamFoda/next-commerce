import { Wishlist, QuickView } from "../icons";
import Tooltip from "../ui/tooltip";
import Modal from "../ui/modal";
import { useEffect, useState } from "react";
import ProductModal from "./productModal";
import { useAppContext } from "../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { TrashIcon } from "@heroicons/react/outline";

const ViewAndWishlist = ({ prod, list = false }) => {
  const { route } = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  const [fav, setFav] = useState(null);
  const { wishlist, dispatch } = useAppContext();
  const openModal = () => {
    setIsOpen(true);
  };
  const addToWishlist = () => {
    const existProduct = wishlist.find((item) => prod.id === item.id);

    if (existProduct) {
      dispatch({ type: "REMOVE_WISHLIST_ITEM", payload: prod.id });
      toast.info(`${prod?.title} Removed From Wishlist`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: prod });
      toast.success(`${prod?.title} Added To Wishlist`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const fav = wishlist.find((item) => prod.id === item.id);
    setFav(fav);
  }, [wishlist]);
  return (
    <>
      <div>{fav && <ToastContainer className={"text-sm"} />}</div>
      {list ? (
        <div className=" flex gap-5 lg:self-end  md:self-end self-start ">
          <Tooltip className="-ml-1" placement="left-center" text="Quick View">
            <div
              onClick={openModal}
              className="cursor-pointer hover:text-primary-hover transition-all list-svg"
            >
              <QuickView />
            </div>
          </Tooltip>
          <Tooltip
            className="-ml-1"
            placement="left-center"
            text={`${
              fav?.id === prod.id ? "Remove from wishlist" : "Add to Wishlist"
            }`}
          >
            <div
              onClick={addToWishlist}
              className={`${
                fav?.id === prod.id ? "text-primary " : ""
              }cursor-pointer hover:text-primary-hover transition-all list-svg`}
            >
              <Wishlist />
            </div>
          </Tooltip>
        </div>
      ) : (
        <div className="absolute top-3 right-3">
          {route === "/wishlist" ? null : (
            <Tooltip
              className="-ml-1"
              placement="left-center"
              text="Quick View"
            >
              <div
                onClick={openModal}
                className="bg-white lg:opacity-0 md:opacity-0 group-hover:opacity-100  cursor-pointer transition duration-300 hover:bg-blue-400  hover:text-white mb-3 g:h-10 md:w-10 sm:w-10 sm:h-10 h-7 w-7 rounded-full flex justify-center items-center"
              >
                <QuickView />
              </div>
            </Tooltip>
          )}
          <Tooltip
            className="-ml-1"
            placement="left-center"
            text={`${
              fav?.id === prod.id ? "Remove from wishlist" : "Add to Wishlist"
            }`}
          >
            <div
              onClick={addToWishlist}
              className={`${
                fav?.id === prod.id ? "bg-primary text-white" : "bg-white"
              }  lg:opacity-0 md:opacity-0 group-hover:opacity-100 cursor-pointer transition duration-300  hover:bg-blue-400 hover:text-white right-0 lg:h-10 md:w-10 sm:w-10 sm:h-10 h-7 w-7 rounded-full flex justify-center items-center`}
            >
              {route === "/wishlist" ? (
                <TrashIcon className="w-5 h-5" />
              ) : (
                <Wishlist />
              )}
            </div>
          </Tooltip>
        </div>
      )}
      <Modal maxWidth="1024px" isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProductModal setIsOpen={setIsOpen} prod={prod} />
      </Modal>
    </>
  );
};

export default ViewAndWishlist;
