import React, { useEffect, useState } from "react";
import Rates from "../ui/Rate";
interface Props {
  title: string;
  price: number;
  rate: number;
}
const ProdDetails: React.FC<Props> = ({ title, price, rate }) => {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 400));
  }, []);
  return (
    <>
      <h3 className="text-sm mb-2">
        SKU: <span className="text-gray-color">{random}</span>
      </h3>
      <h3 className="text-sm">
        Availability:{" "}
        <span className="text-gray-color"> available in stock</span>
      </h3>
      <div className="lg:mt-7 my-5">
        <h1 className="lg:text-3xl text-2xl">{title}</h1>
        <h2 className="lg:text-3xl text-2xl text-primary">${price}.00</h2>
        <h3 className="text-gray-color text-sm">Tax included.</h3>
      </div>
      <div className="flex items-center gap-3">
        <Rates size={22} rate={rate} />
        <span className="text-primary">8 reviews</span>
      </div>
    </>
  );
};

export default ProdDetails;
