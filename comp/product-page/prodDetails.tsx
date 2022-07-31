import React, { useEffect, useState } from "react";
interface Props {
  title: string;
  price: number;
}
const ProdDetails: React.FC<Props> = ({ title, price }) => {
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
      <div className="my-7">
        <h1 className="text-3xl">{title}</h1>
        <h2 className="text-3xl text-primary">${price}.00</h2>
        <h3 className="text-gray-color text-sm">Tax included.</h3>
      </div>
    </>
  );
};

export default ProdDetails;
