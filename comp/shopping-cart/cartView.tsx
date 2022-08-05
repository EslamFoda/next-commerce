import CartProduct from "./cartProduct";
import ContinueOrClear from "./continueOrClear";
import CheckoutProcess from "./checkout-process";
const CartView = ({ cart }) => {
  return (
    <div className="p-4">
      <div>
        {cart.map((item) => {
          return (
            <CartProduct
              key={item.id}
              item={item}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              image={item.prodImages[0]}
            />
          );
        })}
      </div>
      {cart?.length ? <ContinueOrClear /> : null}
      {cart?.length ? <CheckoutProcess cart={cart}/> : null}
    </div>
  );
};
export default CartView;
