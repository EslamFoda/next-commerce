import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import useCart from "../../../hooks/useCart";
import CheckoutProducts from "./checkoutProducts";
import SubTotalAndTotal from "./subTotalAndTotal";

const CheckoutCollapse = () => {
  const { totalPrice } = useCart();
  return (
    <div className="mx-auto w-full  max-w-lg rounded-2xl ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between py-4 text-left text-sm font-medium text-primary ${
                open ? " border-0 border-b border-gray-border border-solid" : ""
              }`}
            >
              <div className="flex items-center gap-1">
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="text-base ">
                  {open ? `Hide order summary` : "Show order summary"}
                </span>
                <span>
                  {open ? (
                    <ChevronUpIcon className="h-4 w-4 mt-1" />
                  ) : (
                    <ChevronDownIcon className="h-4  w-4 mt-2" />
                  )}
                </span>
              </div>
              <span className="text-lg text-font-color font-semibold">
                ${totalPrice + 20}.00
              </span>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-300 ease-in-out"
              enterFrom="transform -translate-y-7 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-300  ease-in-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-6 opacity-0"
            >
              <Disclosure.Panel className=" pt-4 pb-2 text-sm leading-7 text-gray-500">
                <CheckoutProducts />
                <SubTotalAndTotal />
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CheckoutCollapse;
