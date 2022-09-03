import { useRouter } from "next/router";
import { useEffect } from "react";
import CheckoutView from "../comp/checkout";
import { useAppContext } from "../context/AppContext";
const Checkout = () => {
  const { cart } = useAppContext();
  const { push } = useRouter();
  useEffect(() => {
    cart.length ? push("/checkout") : push("/");
  }, [cart]);
  return <CheckoutView />;
};
export default Checkout;
