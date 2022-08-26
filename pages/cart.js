import Breadcrumb from "../comp/ui/breadcrumb";
import Header from "../comp/common/header";
import CartView from "../comp/shopping-cart/cartView";
import { useAppContext } from "../context/AppContext";
import { getCollection } from "../services";
import Empty from "../comp/shopping-cart/empty";
import dynamic from "next/dynamic";
const DynamicSlider = dynamic(() => import("../comp/ui/keenSlider"));
const Cart = ({ men, women }) => {
  const { cart } = useAppContext();
  return (
    <>
      <Breadcrumb base="Home" type="Your Shopping Cart" />
      {cart.length ? (
        <>
          <Header hover={false} title="SHOPPING CART" />
          <CartView cart={cart} />
          <Header
            style={{ marginTop: "80px" }}
            hover={false}
            title="YOU MAY BE INTERESTED IN THESE PRODUCTS"
          />
          <DynamicSlider
            type="womens"
            data={women?.storeProducts}
            title="Womens"
          />
          <DynamicSlider
            type="mens"
            data={men?.storeProducts}
            title="For Mens"
          />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};
export default Cart;
export async function getServerSideProps() {
  const men = (await getCollection("Mens")) || [];
  const women = (await getCollection("Womens")) || [];

  return { props: { men, women } };
}
