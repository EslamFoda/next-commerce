import { useEffect, useState } from "react";
import Rate from "../common/rate";
import Button from "../ui/Button";
import Counter from "./counter";
import Guides from "./guides";
import TermsAndConditions from "./termsAndCond";
import AddToWishlist from "./addToWishlist";
import Details from "./details";
import { Disclosure } from '@headlessui/react'
import Collapse from "../common/collapse";
const ProdInfo = ({ product }) => {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 400));
  }, []);
  return (
    <div>
      <h3 className="text-sm mb-2">
        SKU: <span className="text-gray-color">{random}</span>
      </h3>
      <h3 className="text-sm">
        Availability:{" "}
        <span className="text-gray-color"> available in stock</span>
      </h3>
      <div className="my-7">
        <h1 className="text-3xl">{product?.title}</h1>
        <h2 className="text-3xl text-primary">${product.price}.00</h2>
        <h3 className="text-gray-color text-sm">Tax included.</h3>
      </div>
      <div className="flex items-center gap-3">
        <Rate rate={product.rate} />
        <span className="text-primary">8 reviews</span>
      </div>
      <Guides />
      <Counter product={product} />
      <TermsAndConditions />
      <Button variant="custom" full>
        BUY IT NOW
      </Button>
      <AddToWishlist />
      <Details product={product} />
      <div className="mt-8">
       <Collapse title='DESCRIPTION' desc={"We are proud to present our best premium Shopify theme - Wokiee. This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy. Please, take a look at feature list and compare with our competitors. You can buy our theme and start your business online with minimal time investments. Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop."}/>
       <Collapse title='ADDITIONAL INFORMATION' details/>
      </div>
    </div>
  );
};

export default ProdInfo;
