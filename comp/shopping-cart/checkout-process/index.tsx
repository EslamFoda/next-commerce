import Grid from "../../ui/Grid";
import Shipping from "./shipping";
import Note from "./note";
import SubTotal from "./subtotal";
const CheckoutProcess = ({cart}) => {
  return (
    <Grid className="!p-0" layout="normal">
      <Shipping />
      <Note />
      <SubTotal cart={cart}/>
    </Grid>
  );
};

export default CheckoutProcess;
