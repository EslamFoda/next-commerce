const ShippingDetails = ({
  steps = undefined,
  email,
  address,
  city,
  apartment,
  country,
}) => {
  return (
    <>
      {" "}
      <div className="border px-4 my-8 border-solid border-gray-border rounded-md">
        <div className="flex border-0 py-3 border-b border-gray-border items-center justify-between ">
          <div className="flex items-center gap-6 Contact ">
            <span className="text-gray text-sm">Contact</span>
            <span className="text-sm text-font-color">{email}</span>
          </div>
          <span className="text-sm text-primary-hover">Change</span>
        </div>
        <div className="flex  py-3 items-center justify-between ">
          <div className="flex items-start gap-6 Contact ">
            <span className="text-gray block max-w-max min-w-max text-sm">Ship to</span>
            <span className="text-sm text-font-color">
              {address}, {apartment}, {city}, { country}
            </span>
          </div>
          <span className="text-sm self-start text-primary-hover">Change</span>
        </div>
        {steps ? (
          <div className="flex border-0 py-3 border-t border-gray-border items-center justify-between ">
            <div className="flex items-center gap-6 Contact ">
              <span className="text-gray text-sm">Method</span>
              <span className="text-sm text-font-color">
                International Shipping · $20.00{" "}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ShippingDetails;
