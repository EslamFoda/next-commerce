import { useState } from "react";
import Grid from "../ui/Grid";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
const CheckoutView = () => {
  const [steps, setSteps] = useState(1);
  return (
    <Grid className="!p-0 !gap-0" layout={"E"}>
      <div className="lg:p-16  lg:order-1 md:order-1 order-2  p-4">
        <LeftSide steps={steps} setSteps={setSteps}/>
      </div>
      <div className="bg-white p-4 pb-0 block lg:hidden md:hidden mx-auto w-full  max-w-lg lg:mx-0 lg:max-w-full md:mx-0 md:max-w-full">
        <h1 className="text-xl text-font-color mb-4 font-semibold">CHECKOUT</h1>
      </div>
      <div className="bg-[#fafafa] lg:order-2 md:order-2 order-1 lg:p-16 md:p-4 p-0 pb-0">
        <RightSide />
      </div>
    </Grid>
  );
};
export default CheckoutView;
