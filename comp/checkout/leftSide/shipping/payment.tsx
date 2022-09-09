import ShippingDetails from "./shippingDetails";
import { ExclamationIcon } from "@heroicons/react/outline";
const Payment = ({ steps, email, address, city, apartment, country }) => {
  return (
    <>
      {" "}
      <ShippingDetails
        email={email}
        steps={steps}
        address={address}
        city={city}
        apartment={apartment}
        country={country}
      />
      <div>
        <h2
          className="text-md text-font-color
         font-semibold"
        >
          {" "}
          Payment{" "}
        </h2>
        <p className="text-sm text-gray">
          {" "}
          All transactions are secure and encrypted.{" "}
        </p>
        <div className="flex items-center gap-2 bg-[#fff8de] p-4 rounded-md mt-4 border border-solid border-[#f0e4bc]">
          <ExclamationIcon className="w-7 h-7 text-[#b88600]" />
          <span className="text-[#545454] text-sm">
            This store can't accept real orders or real payments.
          </span>
        </div>
        <div className="flex items-center gap-2  p-4 rounded-md mt-4 border border-solid border-gray-border">
          <span className="text-[#545454] text-sm">Cash on Delivery (COD)</span>
        </div>
      </div>
    </>
  );
};

export default Payment;
