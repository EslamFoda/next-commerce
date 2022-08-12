import { useState } from "react";
import Collection from "./collection";
import { Disclosure, Transition } from "@headlessui/react";
import {  MinusIcon, PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";
const CollectionView = ({ type, collection,trendingAndBestSellers }) => {
  const { storeProducts } = collection;

  return (
    <div className="grid grid-cols-4 gap-5 h-screen p-4">
      <div className=" hidden lg:block">
        <div className="w-full px-4 pt-16">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button  className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>COLLECTIONS</span>
                    {open ? (
                      <MinusIcon className="h-4 w-4" />
                    ) : (
                      <PlusIcon className="h-4 w-4" />
                    )}
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
                    <Disclosure.Panel  className="px-4 pt-4 pb-2 text-sm text-gray-500">
                     <Link href='/collections/Womens'>
                      <div>
                     Womens
                      </div>
                     </Link>
                     <Link href='/collections/Mens'>
                      <div>
                     Mens
                      </div>
                     </Link>
                     <Link href='/collections/Trending'>
                      <div>
                      Trending
                      </div>
                     </Link>
                     <Link href='/collections/Best-Seller'>
                      <div>
                      Best Seller
                      </div>
                     </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    {open ? (
                      <MinusIcon className="h-4 w-4" />
                    ) : (
                      <PlusIcon className="h-4 w-4" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 col-span-4">
        <Collection type={type} collection={storeProducts} trendingAndBestSellers={trendingAndBestSellers.storeProducts}/>
      </div>
    </div>
  );
};

export default CollectionView;
