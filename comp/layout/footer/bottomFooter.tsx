import Grid from "../../ui/Grid";

const BottomFooter = () => {
  return (
    <div className="bg-[#f7f8fa] hidden py-8 lg:block md:block">
    <Grid layout={"F"}>
      <div className="flex flex-col gap-y-2">
        <h5 className="mb-2 font-semibold">CATEGORIES</h5>
        <span className="text-sm font-sm text-gray">Women</span>
        <span className="text-sm text-gray">Mens</span>
        <span className="text-sm text-gray">Trending</span>
        <span className="text-sm text-gray">Best Seller</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <h5 className="mb-2 font-semibold">BUY WITH US</h5>
        <span className="text-sm text-gray">About Us</span>
        <span className="text-sm text-gray">Services</span>
        <span className="text-sm text-gray">Contact Us</span>
        <span className="text-sm text-gray">FAQs</span>
        <span className="text-sm text-gray">Privacy Policy</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <h5 className="mb-2 font-semibold">ABOUT</h5>
        <p className="text-sm text-gray">
          {" "}
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat tempor incididunt.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h5 className="mb-2 font-semibold">CONTACT US</h5>
        <span className="text-font-color text-sm">
          ADDRESS:{" "}
          <span className="text-gray">
            7895 Piermont Dr NE Albuquerque, NM 198866, United States of America
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
    </Grid>
    </div>
  );
};
export default BottomFooter;
