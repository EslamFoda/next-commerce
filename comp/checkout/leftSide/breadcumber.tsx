import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Breadcumber = ({ setSteps, address, city, email, steps }) => {
  return (
    <>
      {" "}
      <h1 className="text-xl hidden lg:block md:block text-font-color mb-4 font-semibold">
        CHECKOUT
      </h1>
      <nav className="bg-grey-light text-sm rounded-md w-full">
        <ol className="list-reset flex">
          <li className="text-blue-600 hover:text-blue-700 cursor-pointer">
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <span className="text-gray mx-1">
              <ChevronRightIcon className="w-4 inline-block h-4" />
            </span>
          </li>
          <li
            onClick={() => {
              setSteps(1);
            }}
          >
            <span
              className={`${
                steps === 1
                  ? "text-font-color"
                  : "text-blue-600 hover:text-blue-700"
              } ${steps === 2 || steps === 3 ? "cursor-pointer" : ""}`}
            >
              Information
            </span>
          </li>
          <li>
            <span className="text-gray-color mx-1">
              <ChevronRightIcon className="w-4 inline-block h-4" />
            </span>
          </li>
          <li
            onClick={() => {
              if (address && city && email) {
                setSteps(2);
              }
            }}
            className={`${
              steps === 2
                ? "text-font-color"
                : "text-blue-600 hover:text-blue-700"
            } ${address && city && email ? "cursor-pointer" : ""}`}
          >
            Shipping
          </li>
          <li>
            <span className="text-gray-color mx-1">
              <ChevronRightIcon className="w-4 inline-block h-4" />
            </span>
          </li>
          <li
            onClick={() => {
              if (address && city && email) {
                setSteps(3);
              }
            }}
            className={`${
              steps === 3
                ? "text-font-color"
                : "text-blue-600 hover:text-blue-700"
            } ${address && city && email ? "cursor-pointer" : ""}`}
          >
            Payment
          </li>
        </ol>
      </nav>
    </>
  );
};
export default Breadcumber;
