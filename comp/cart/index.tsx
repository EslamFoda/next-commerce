import CartItem from "./cartItem";
import CartCheckout from "./cartCheckout";
import { useAppContext } from "../../context/AppContext";
import Link from "next/link";
import Empty from "../shopping-cart/empty";
const Cart = ({ setIsCartOpen = undefined }) => {
  const { cart } = useAppContext();

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
          <CartCheckout />
        </>
      ) : (
        <Empty emptyCart={true} />
      )}
    </>
  );
};
export default Cart;
