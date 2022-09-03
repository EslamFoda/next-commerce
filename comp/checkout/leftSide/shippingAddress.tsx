const ShippingAddress = () => {
  return (
    <div>
      <h2
        className="text-md text-font-color
         font-semibold mt-8 mb-5"
      >
        Shipping address
      </h2>

      <select
        className="block w-full focus:bg-white focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover bg-white  text-gray"
        name="cars"
        id="cars"
      >
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andora">Andora</option>
        <option value="Angola">Angola</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
      </select>
      <div className="flex items-center gap-2">
        <input
          placeholder="First name"
          className="w-full focus:bg-white my-3 focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover   text-gray"
        />
        <input
          placeholder="Last name"
          className="w-full focus:bg-white my-3 focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover   text-gray"
        />
      </div>
      <input
        placeholder="Address"
        className="w-full focus:bg-white  focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover   text-gray"
      />
      <input
        placeholder="Appartment, suite, etc."
        className="w-full focus:bg-white my-3 focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover   text-gray"
      />
      <input
        placeholder="City"
        className="w-full focus:bg-white focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover   text-gray"
      />
      <div>
        <div className="flex mt-3 items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            className="w-4 h-4 cursor-pointer bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label
            htmlFor="link-checkbox"
            className={`ml-2 cursor-pointer lg:text-sm md:text-sm text-xs font-medium text-gray-900 `}
          >
            Save this information for next time
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
