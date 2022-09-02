import Grid from "../../ui/Grid";
import Shipping from "./shipping";
import Note from "./note";
import SubTotal from "./subtotal";
const CheckoutProcess = () => {
  return (
    <Grid className="!p-0" layout="normal">
      <Shipping />
      <Note />
      <SubTotal />
    </Grid>
  );
};

export default CheckoutProcess;
