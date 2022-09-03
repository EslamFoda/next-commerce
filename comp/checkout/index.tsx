import Grid from "../ui/Grid";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
const CheckoutView = () => {
  return (
    <Grid className="!p-0" layout={"E"}>
      <div  className='lg:p-16  p-4'>
        <LeftSide />
      </div>
      <div className="bg-[#fafafa] lg:p-16 p-4 pb-0">
        <RightSide />
      </div>
    </Grid>
  );
};
export default CheckoutView;
