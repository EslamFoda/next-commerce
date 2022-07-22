import React, { useState } from "react";
import useCollapse from "react-collapsed";

interface Props {
  title?: string;
  desc?: string;
  details?: boolean;
}
const Collapse: React.FC<Props> = ({ title, desc, details }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? (
          <span className="text-black text-sm font-semibold inline-block mb-4">
            {title}
          </span>
        ) : (
          <span className="text-gray-color text-sm font-semibold inline-block hover:text-black transition duration-300">
            {title}
          </span>
        )}
      </button>
      <section
        className=" text-gray-color leading-7 text-sm"
        {...getCollapseProps()}
      >
        {desc ? desc : null}
        {details ? (
          <>
            <span className="text-black block">
              Color:{" "}
              <span className="text-gray-color">Blue, Purple, White</span>
            </span>
            <span className="text-black block">
              Size: <span className="text-gray-color">20, 24</span>
            </span>
            <span className="text-black block">
              Material: <span className="text-gray-color">100% Polyester</span>
            </span>
          </>
        ) : null}
      </section>
      <div className="border-t-[1px] my-4 border-gray-color border-solid w-full"></div>
    </>
  );
};

export default Collapse;
