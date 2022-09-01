import FooterSocial from "./footerSocial";
import { social } from "../../../../constant";
const TopFooter = () => {
  return (
    <>
      <div className="bg-primary-hover  items-center gap-2 p-4 lg:grid md:grid hidden  grid-cols-4">
        <span className="text-white font-semibold text-sm">
          BE IN TOUCH WITH US:{" "}
        </span>
        <div className="flex col-span-2">
          <input
            className="w-full p-2 rounded-l-md"
            type="email"
            placeholder="Enter your e-mail"
          />
          <button className="bg-[#303030] hover:bg-[#000000] transition-all text-sm w-max min-w-max rounded-r-md px-4 text-white">
            JOIN US
          </button>
        </div>
        <FooterSocial social={social} />
      </div>
    </>
  );
};

export default TopFooter;
