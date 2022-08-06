import Breadcrumb from "../comp/ui/breadcrumb";
import Header from "../comp/common/header";
import CartView from '../comp/shopping-cart/cartView'
import {useAppContext} from '../context/AppContext'
import { getCollection } from "../services";
import dynamic from 'next/dynamic'
const DynamicSlider = dynamic(()=>import("../comp/ui/keenSlider"))
const Cart = ({men,women}) => {
  const {cart} = useAppContext()
  return (
    <>
      <Breadcrumb base="Home" type="Your Shopping Cart" />
      <Header hover={false} title="SHOPPING CART"/>
      <CartView cart={cart}/>
      {cart.length ? <DynamicSlider data={women?.storeProducts} title='Womens'/> : null}
      {cart.length ? <DynamicSlider data={men?.storeProducts} title='For Mens'/>: null}
    </>
  );
};
export default Cart;
export async function getServerSideProps() {
  const men = (await getCollection("Mens")) || [];
  const women = (await getCollection("Womens")) || [];

  return { props: { men, women } };
}
