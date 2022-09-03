import Breadcumber from "./breadcumber";
import ContactInfo from './contactInfo'
import ReturnToCart from "./returnToCart";
import ShippingAddress from './shippingAddress'
import CheckoutFooter from "./checkoutFooter";
const LeftSide = () => {
  return (
    <>
      <Breadcumber />
      <ContactInfo/>
      <ShippingAddress/>
      <ReturnToCart/>
      <CheckoutFooter/>
    </>
  );
};

export default LeftSide;
