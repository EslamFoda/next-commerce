import CartItem from "./cartItem";
import CartCheckout from "./cartCheckout";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cart } = useAppContext();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const initialValue = 0;
    const price = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      initialValue
    );
    setTotalPrice(price);
  }, [cart]);
  return (
    <>
      <>
        {cart.slice(0, 3).map((item, i) => {
          return (
            <CartItem
              key={i}
              id={item.id}
              title={item.title}
              image={item.image.url}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </>
      {cart.length > 3 && (
        <div className="w-full text-center mb-6">
          <span title="view cart" className="text-primary cursor-pointer">. . .</span>
        </div>
      )}
      <CartCheckout total={totalPrice} />
    </>
  );
};
export default Cart;
