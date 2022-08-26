import CartItem from "./cartItem";
import CartCheckout from "./cartCheckout";
import { useAppContext } from "../../context/AppContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Empty from "../shopping-cart/empty";
const Cart = ({setIsCartOpen = undefined}) => {
  const { cart } = useAppContext();
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cart,'asdadasd')
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
      {cart.length ? (
        <>
          {cart.slice(0, 3).map((item, i) => {
            return (
              <CartItem
                key={i}
                id={item.id}
                title={item.title}
                image={item.prodImages[0].url}
                price={item.price}
                quantity={item.quantity}
                type={item.type}
                slug={item.slug}
                setIsCartOpen={setIsCartOpen}
              />
            );
          })}
          {cart.length > 3 && (
            <div className="w-full text-center mb-6">
              <Link href="/cart">
                <span title="view cart" className="text-primary cursor-pointer">
                  . . .
                </span>
              </Link>
            </div>
          )}
          <CartCheckout total={totalPrice} />
        </>
      ) : (
        <Empty emptyCart={true} />
      )}
    </>
  );
};
export default Cart;
