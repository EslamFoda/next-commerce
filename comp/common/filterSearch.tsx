import { Fragment, useEffect, useState } from "react";
import { request } from "graphql-request";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
const FilterSearch = ({ setModalOpen }) => {
  const [selected, setSelected] = useState([]);
  const [queryy, setQuery] = useState("");
  const [allProduct, setAllProducts] = useState(null);
  const filteredProducts =
    queryy === ""
      ? ""
      : allProduct?.filter((product) =>
          product.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryy.toLowerCase().replace(/\s+/g, ""))
        );
  useEffect(() => {
    const fetchProducts = async () => {
      const { storeProducts } = await request(
        "https://api-eu-west-2.hygraph.com/v2/cl5dpdx8x07s401t0csu9g8t3/master",
        `
              {
                storeProducts(first: 50) {
                  id
                  collection
                  price
                  quantity
                  slug
                  title
                  vendor
                  productType
                  rate
                  type
                  image {
                    id
                    url
                  }
                  prodImages {
                    id
                    url
                  }
                }
              }
            `
      );
      setAllProducts(storeProducts);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              // @ts-ignore
              displayValue={(product) => product?.title}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 lg:max-h-80 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 lg:grid lg:grid-cols-5 block ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredProducts.length === 0 ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <Combobox.Option
                    key={product.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-2 my-2 pr-4 ${
                        active
                          ? "bg-primary lg:bg-transparent lg:text-primary text-white"
                          : "text-gray-900"
                      }`
                    }
                    value={product}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex lg:flex-col flex-row items-center gap-2">
                          <Link
                            href={`/collections/${product.type}/${product.slug}`}
                          >
                            <div
                              onClick={() => {
                                setModalOpen(false);
                              }}
                              className="relative lg:w-[187px] lg:h-[215px] w-12 h-12"
                            >
                              <Image
                                src={product.prodImages[0].url}
                                alt="product image"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          </Link>
                          <Link
                            href={`/collections/${product.type}/${product.slug}`}
                          >
                            <span
                              onClick={() => {
                                setModalOpen(false);
                              }}
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {product.title}
                            </span>
                          </Link>
                        </div>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};
export default FilterSearch;
