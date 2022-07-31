import React from "react";

interface Props {
  fontSize?: "sm" | "xs" | "base"
}
const TermsAndConditions: React.FC<Props> = ({fontSize = "sm"})=>{
    return (
        <div className="my-4">
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4  bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="link-checkbox"
            className={`ml-2 cursor-pointer text-${fontSize} font-medium text-gray-900 `}
          >
            I agree with the terms and conditions.
          </label>
        </div>
      </div>
    )
}

export default TermsAndConditions;