import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAppContext } from "../../context/AppContext";
import { ThinHeart, CompareIcon } from "../icons";
import { HeartIcon } from "@heroicons/react/outline";
const AddToWishlist = ({ product }) => {
  const { wishlist, dispatch } = useAppContext();
  const [fav, setFav] = useState(null);
  const addToWishlist = () => {
    const existProduct = wishlist.find((item) => product.id === item.id);

    if (existProduct) {
      dispatch({ type: "REMOVE_WISHLIST_ITEM", payload: product.id });
      toast.info(`${product?.title} Removed From Wishlist`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
      toast.success(`${product?.title} Added To Wishlist`, {
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
    const fav = wishlist.find((item) => product.id === item.id);
    setFav(fav);
  }, [wishlist]);
  return (
    <>
      <ToastContainer className={"text-sm"} />
      <div className="flex items-center gap-x-7 gap-y-4 flex-wrap my-8">
        <div
          onClick={addToWishlist}
          className={`flex ${
            fav ? "text-black" : "text-primary"
          } cursor-pointer group items-center gap-3`}
        >
          <HeartIcon className="h-4 w-4 group-hover:text-black" />
          <span className="text-sm group-hover:text-black">
            {fav ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
          </span>
        </div>
        <div className="flex group cursor-pointer items-center gap-3">
          <CompareIcon />
          <span className="text-primary text-sm group-hover:text-black">
            ADD TO COMPARE
          </span>
        </div>
      </div>
    </>
  );
};

export default AddToWishlist;
