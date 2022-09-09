import { useRouter } from "next/router";
import { useEffect } from "react";
import CheckoutView from "../comp/checkout";
import { useAppContext } from "../context/AppContext";
import Head from "next/head";

const Checkout = () => {
  const { cart } = useAppContext();
  const { push } = useRouter();
  useEffect(() => {
    cart.length ? push("/checkout") : push("/");
  }, [cart]);

  return <>{cart.length ?
    <>
      <Head>
        <title>Checkout - wokiee</title>
      </Head>
     <CheckoutView /> 
    </>
     : null}</>;
};
export default Checkout;
