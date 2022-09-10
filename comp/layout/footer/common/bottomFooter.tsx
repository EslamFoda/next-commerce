import Grid from "../../../ui/Grid";
import ContactUs from "./contactUs";
import FooterLinks from "./footerLinks";

const BottomFooter = () => {
  return (
    <div className="bg-[#f7f8fa] hidden py-8 lg:block md:block">
      <Grid layout={"F"}>
        <div className="flex flex-col gap-y-2">
          <h5 className="mb-2 font-semibold">CATEGORIES</h5>
          <FooterLinks />
        </div>
        <div className="flex flex-col gap-y-2">
          <h5 className="mb-2 font-semibold">BUY WITH US</h5>
          <FooterLinks buyLink />
        </div>
        <div className="flex flex-col gap-y-2">
          <h5 className="mb-2 font-semibold">ABOUT</h5>
          <p className="text-sm text-gray">
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat tempor incididunt.{" "}
          </p>
        </div>
        <ContactUs footerTitle/>
      </Grid>
    </div>
  );
};
export default BottomFooter;
