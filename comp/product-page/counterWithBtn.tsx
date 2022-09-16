import { CartIcon } from "../icons";
import Button from "../ui/Button";
import { useAppContext } from "../../context/AppContext";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddedSuccessFully = dynamic(() => import("../common/addedSuccessFully"));

interface Props {
  product: any;
  modal?: Boolean;
}
const CounterWithBtn: FC<Props> = ({ product, modal = false }) => {
  const { cart, dispatch } = useAppContext();
  const [quantity, setQuantity] = useState(product?.quantity);
  const [isOpen, setIsOpen] = useState(false);
  const [addedProd, setAddedProd] = useState(null);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toastify = (prod) => {
    setIsOpen(true);
    setAddedProd(prod);
    setLoading(true);
    setTimeout(() => {
      if (modal) {
        toast.success(`${quantity} ${prod?.title} Added To The Cart`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setAdded(true);
    }, 1000);
  };

  const addToCart = () => {
    setLoading(false);
    setAdded(false);
    const existProduct = cart.find((item) => product.id === item.id);
    if (existProduct) {
      const newQuantity = (existProduct.quantity += quantity);
      const prod = { ...product, quantity: newQuantity };
      dispatch({ type: "REMOVE_CART_ITEM", payload: prod.id });
      dispatch({ type: "ADD_TO_CART", payload: prod });
      toastify(prod);
    } else {
      const prod = { ...product, quantity: quantity };
      dispatch({ type: "ADD_TO_CART", payload: prod });
      toastify(prod);
    }
    setTimeout(() => {
      setAdded(true);
    }, 1000);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      {modal && <ToastContainer className={"text-sm"} />}
      {addedProd && !modal && (
        <AddedSuccessFully
          addedProd={addedProd}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <div className="flex items-center  flex-col sm:flex-row mt-8 gap-8">
        <div
          className="flex items-center justify-around 
         w-full
        sm:w-[200px]
        rounded-md h-[50px] bg-light"
        >
          <div className="cursor-pointer " onClick={decrement}>
            -
          </div>
          <div>{quantity}</div>
          <div className="cursor-pointer" onClick={increment}>
            +
          </div>
        </div>

        {modal ? (
          <Button
            className={loading && added ? "!bg-green-600" : ""}
            onClick={addToCart}
            full
            icon={<CartIcon />}
          >
            {loading && !added ? "Wait" : ""}
            {loading && added ? "Added" : ""}
            {!loading && added ? "Add to cart" : ""}
            {!loading && !added ? "Add to cart" : ""}
          </Button>
        ) : (
          <Button onClick={addToCart} full icon={<CartIcon />}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default CounterWithBtn;
