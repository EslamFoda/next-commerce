import ShippingMethods from "./shippingMethods";
import ShippingDetails from "./shippingDetails";
const Shipping = ({ email, address, city, apartment, country }) => {
  return (
    <>
      <ShippingDetails
        email={email}
        address={address}
        city={city}
        apartment={apartment}
        country={country}
      />
      <ShippingMethods />
    </>
  );
};

export default Shipping;
