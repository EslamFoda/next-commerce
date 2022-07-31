import { CartIcon } from "../icons";
import Button from "../ui/Button";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
const Counter = ({ product }) => {
  const { dispatch } = useAppContext();
  const [quantity,setQuantity] = useState(product?.quantity)
  const increment = ()=>{
    setQuantity(quantity+1)
  }
  const decrement = ()=>{
    if(quantity > 1){
      setQuantity(quantity-1)
    }
  }
  return (
    <div className="flex items-center mt-8  gap-8">
      <div className="flex items-center justify-around w-[200px] rounded-md h-[50px] bg-light">
        <div className="cursor-pointer" onClick={decrement}>-</div>
        <div>{quantity}</div>
        <div className="cursor-pointer" onClick={increment}>+</div>
      </div>
      <Button
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: product });
        }}
        full
        icon={<CartIcon />}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Counter;
