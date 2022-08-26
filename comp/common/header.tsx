import React from "react";

interface Props {
  title: string;
  subTitle: string;
  Variant?: "heading" | "blog";
  style?: {};
  hover?: boolean;
}

const Header: React.FC<Props> = ({
  title,
  style,
  subTitle,
  Variant = "heading",
  hover = true,
}) => {
  return (
    <>
      {Variant === "heading" ? (
        <div style={style} className="text-center w-full py-8">
          <h1
            className={`lg:text-2xl sm:text-2xl text-xl font-semibold inline-block ${
              hover ? "hover:text-blue-700 hover:cursor-pointer" : null
            } transition duration-300`}
          >
            {title}
          </h1>
          <h2 className="text-base font-semibold">{subTitle}</h2>
        </div>
      ) : (
        <div style={style} className="text-center">
          <h2 className="text-base font-semibold hover:cursor-pointer inline-block hover:text-black    text-blue-700 transition duration-300">
            {title}
          </h2>
          <h1 className="text-xl font-semibold ">{subTitle}</h1>
        </div>
      )}
    </>
  );
};

export default Header;
