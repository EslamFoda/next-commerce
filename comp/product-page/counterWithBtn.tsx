import { CartIcon } from "../icons";
import Button from "../ui/Button";
import { useAppContext } from "../../context/AppContext";
import { FC, useState } from "react";
interface Props {
  product: any;
  button?: boolean;
}
const CounterWithBtn: FC<Props> = ({ product, button = true }) => {
  const { cart, dispatch } = useAppContext();
  const [quantity, setQuantity] = useState(product?.quantity);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart = () => {
    const existProduct = cart.find((item) => product.id === item.id);
    if (existProduct) {
      const newQuantity = (existProduct.quantity += quantity);
      const prod = { ...product, quantity: newQuantity };
      dispatch({ type: "REMOVE_CART_ITEM", payload: prod.id });
      dispatch({ type: "ADD_TO_CART", payload: prod });
    } else {
      const prod = { ...product, quantity: quantity };
      dispatch({ type: "ADD_TO_CART", payload: prod });
    }
  };
  return (
    <div className="flex items-center mt-8 gap-8">
      <div
        className="flex items-center justify-around 
         w-[200px]
        rounded-md h-[50px] bg-light"
      >
        <div className="cursor-pointer" onClick={decrement}>
          -
        </div>
        <div>{quantity}</div>
        <div className="cursor-pointer" onClick={increment}>
          +
        </div>
      </div>

      <Button onClick={addToCart} full icon={<CartIcon />}>
        Add to cart
      </Button>
    </div>
  );
};

export default CounterWithBtn;
