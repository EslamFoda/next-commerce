const ShippingMethods = () => {
  return (
    <div>
      <h2 className="text-md text-font-color
         font-semibold">Shipping method</h2>
      <div className="border px-4 my-8 mt-4 border-solid border-gray-border rounded-md">
        <div className="flex border-0 py-3 border-b border-gray-border items-center justify-between ">
          <div className="flex items-center gap-3 Contact ">
            <span className="h-5 w-5 relative flex justify-center items-center bg-primary rounded-full">
              <span className="h-1 w-1  block  bg-white rounded-full"></span>
            </span>
            <span className="text-sm text-font-color">International Shipping</span>
          </div>
          <span className="text-sm text-font-color">$20.00</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethods;
