import Button from "../../../ui/Button";
import MyDisclosure from "../../../ui/disclosure";
import FooterSocial from "./footerSocial";
import { socialBlack } from "../../../../constant";
import FooterLinks from "./footerLinks";
import ContactUs from "./contactUs";
const FooterMobile = () => {
  return (
    <div className="block p-4 bg-[#f7f8fa] lg:hidden md:hidden">
      <MyDisclosure defaultOpen={false} title="CATEGORIES">
        <div className="flex flex-col gap-y-2">
          <FooterLinks />
        </div>
      </MyDisclosure>
      <MyDisclosure defaultOpen={false} title="BUY WITH US">
        <div className="flex flex-col gap-y-2">
          <FooterLinks buyLink />
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
        <ContactUs />
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
