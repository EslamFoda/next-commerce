const ContactInfo = ({ setEmail, email }) => {
  return (
    <>
      <div className="flex mt-5 flex-wrap gap-2 items-center justify-between">
        <h2
          className="text-md text-font-color
         font-semibold"
        >
          Contact information
        </h2>
        <span className="text-gray">
          Already have an account?<span className="text-primary"> Log in</span>
        </span>
      </div>
      <input
        value={email}
        type="email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email or mobile phone number"
        className="w-full focus:bg-white my-3 focus:placeholder:text-white px-3 border border-solid border-gray-border  rounded-md h-10 focus:outline-none focus:border-primary-hover   text-gray"
      />
      <div>
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            className="w-4 h-4 cursor-pointer bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label
            htmlFor="link-checkbox"
            className={`ml-2 cursor-pointer lg:text-sm md:text-sm text-xs font-medium text-gray-900 `}
          >
            Email me with news and offers
          </label>
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
