import { ChevronRightIcon } from "@heroicons/react/solid";

const Breadcumber = () => {
  return (
    <>
      {" "}
      <h1 className="text-xl text-font-color mb-4 font-semibold">CHECKOUT</h1>
      <nav className="bg-grey-light text-sm rounded-md w-full">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Cart
            </a>
          </li>
          <li>
            <span className="text-gray mx-1">
              <ChevronRightIcon className="w-4 inline-block h-4" />
            </span>
          </li>
          <li>
            <a href="#" className="text-font-color ">
              Information
            </a>
          </li>
          <li>
            <span className="text-gray-color mx-1">
              <ChevronRightIcon className="w-4 inline-block h-4" />
            </span>
          </li>
          <li className="text-gray">Shipping</li>
          <li>
            <span className="text-gray-color mx-1">
              <ChevronRightIcon className="w-4 inline-block h-4" />
            </span>
          </li>
          <li className="text-gray">Payment</li>
        </ol>
      </nav>
    </>
  );
};
export default Breadcumber;
