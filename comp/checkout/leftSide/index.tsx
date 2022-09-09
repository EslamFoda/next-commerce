import Breadcumber from "./breadcumber";
import ContactInfo from "./contactInfo";
import ReturnToCart from "./returnToCart";
import ShippingAddress from "./shippingAddress";
import CheckoutFooter from "./checkoutFooter";
import Shipping from "./shipping/shipping";
import Payment from "./shipping/payment";
import { useState } from "react";
const LeftSide = ({ setSteps, steps }) => {
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const chekcout = () => {
    switch (steps) {
      case 1:
        return (
          <>
            <ContactInfo setEmail={setEmail} email={email} />
            <ShippingAddress
              country={country}
              address={address}
              city={city}
              apartment={apartment}
              setCountry={setCountry}
              setAddress={setAddress}
              setCity={setCity}
              setApartment={setApartment}
            />
          </>
        );
      case 2:
        return (
          <Shipping
            address={address}
            apartment={apartment}
            city={city}
            email={email}
            country={country}
          />
        );
      case 3:
        return (
          <Payment
            address={address}
            apartment={apartment}
            city={city}
            email={email}
            steps={steps}
            country={country}
          />
        );
      default:
        break;
    }
  };
  return (
    <div className="mx-auto w-full  max-w-lg lg:mx-0 lg:max-w-full md:mx-0 md:max-w-full">
      <Breadcumber
        address={address}
        city={city}
        email={email}
        setSteps={setSteps}
        steps={steps}
      />
      {chekcout()}
      <ReturnToCart
        steps={steps}
        city={city}
        address={address}
        email={email}
        setSteps={setSteps}
      />
      <CheckoutFooter />
    </div>
  );
};

export default LeftSide;
