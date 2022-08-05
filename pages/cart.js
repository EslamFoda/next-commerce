import Breadcrumb from "../comp/ui/breadcrumb";
import Header from "../comp/common/header";
import CartView from '../comp/shopping-cart/cartView'
import {useAppContext} from '../context/AppContext'
const Cart = () => {
  const {cart} = useAppContext()
  return (
    <>
      <Breadcrumb base="Home" type="Your Shopping Cart" />
      <Header hover={false} title="SHOPPING CART"/>
      <CartView cart={cart}/>
    </>
  );
};
export default Cart;
