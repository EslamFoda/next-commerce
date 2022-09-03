import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/Button";

interface Props {
  fontSize?: "sm" | "xs" | "base";
  singleProduct?: boolean;
}
const TermsAndConditions: React.FC<Props> = ({
  fontSize = "sm",
  singleProduct = false,
}) => {
  const [agree, setAgree] = useState(false);
  const [buyNow, setBuyNow] = useState(false);
  const handleAgree = () => {
    setAgree(!agree);
  };
  const handleBuyNow = () => {
    setBuyNow(!buyNow);
  };
  return (
    <>
      <div className="my-4">
        <div className="flex items-center">
          {singleProduct ? (
            <input
              id="link-checkbox"
              defaultChecked={buyNow}
              onChange={handleBuyNow}
              type="checkbox"
              className="w-4 h-4 cursor-pointer bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          ) : (
            <input
              id="link-checkbox"
              defaultChecked={agree}
              onChange={handleAgree}
              type="checkbox"
              className="w-4 h-4 cursor-pointer bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          )}
          <label
            htmlFor="link-checkbox"
            className={`ml-2 cursor-pointer lg:text-${fontSize} md:text-${fontSize} text-xs font-medium text-gray-900 `}
          >
            I agree with the terms and conditions.
          </label>
        </div>
      </div>

      {singleProduct ? (
        <Link href="/checkout">
          <Button disabled={!buyNow} variant="custom" full>
            BUY IT NOW
          </Button>
        </Link>
      ) : (
        <Link href="/checkout">
          <Button
            disabled={!agree}
            className="my-3 lg:text-base sm:text-base text-xs"
            height={40}
            full
          >
            PROCEED TO CHECKOUT
          </Button>
        </Link>
      )}
    </>
  );
};

export default TermsAndConditions;
