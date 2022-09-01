import Button from "../../../ui/Button";
import MyDisclosure from "../../../ui/disclosure";
import FooterSocial from "./footerSocial";
import { socialBlack } from "../../../../constant";
const FooterMobile = () => {
  return (
    <div className="block p-4 bg-[#f7f8fa] lg:hidden md:hidden">
      <MyDisclosure defaultOpen={false} title="CATEGORIES">
        <div className="flex flex-col gap-y-2">
          <span className="text-sm font-sm text-gray">Women</span>
          <span className="text-sm text-gray">Mens</span>
          <span className="text-sm text-gray">Trending</span>
          <span className="text-sm text-gray">Best Seller</span>
        </div>
      </MyDisclosure>
      <MyDisclosure defaultOpen={false} title="BUY WITH US">
        <div className="flex flex-col gap-y-2">
          <span className="text-sm text-gray">About Us</span>
          <span className="text-sm text-gray">Services</span>
          <span className="text-sm text-gray">Contact Us</span>
          <span className="text-sm text-gray">FAQs</span>
          <span className="text-sm text-gray">Privacy Policy</span>
        </div>
      </MyDisclosure>
      <MyDisclosure defaultOpen={false} title="ABOUT">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-gray">
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat tempor incididunt.{" "}
          </p>
        </div>
      </MyDisclosure>
      <MyDisclosure defaultOpen={false} title="CONTACT US">
        <div className="flex flex-col gap-y-2">
          <span className="text-font-color text-sm">
            ADDRESS:{" "}
            <span className="text-gray">
              7895 Piermont Dr NE Albuquerque, NM 198866, United States of
              America
            </span>
          </span>
          <span className="text-font-color text-sm">
            PHONE:{" "}
            <span className="text-gray">+566 4774 9930; +566 4774 9940</span>
          </span>
          <span className="text-font-color text-sm">
            HOURS: <span className="text-gray">all week from 9 am to 9 pm</span>
          </span>
          <span className="text-font-color text-sm">
            E-MAIL: <span className="text-primary ">info@mydomain.com</span>
          </span>
        </div>
      </MyDisclosure>
      <MyDisclosure defaultOpen={false} title="BE IN TOUCH WITH US:">
        <div className="flex flex-col gap-y-2">
          <input
            placeholder="Enter your e-mail"
            className="w-full focus:bg-white focus:placeholder:text-white px-3  rounded-md h-10   text-gray"
          />
          <Button full height={40}>
            JOIN US
          </Button>
        </div>
      </MyDisclosure>
      <div className="flex mx-auto w-full max-w-lg flex-col mt-4">
        <FooterSocial social={socialBlack} />
      </div>
    </div>
  );
};

export default FooterMobile;
