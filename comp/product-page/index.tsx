import SinglePageSlider from "./sliderView/singlePageSlider";
import ProdInfo from "./prodInfo";
import Grid from "../ui/Grid";
const ViewProduct = ({ product }) => {
  return (
    <Grid  layout="E">
      <div className='lg:sticky md:sticky md:top-0 md:self-start lg:top-0 lg:self-start'>
        <SinglePageSlider product={product} />
      </div>
      <div>
        <ProdInfo product={product} />
      </div>
    </Grid>
  );
};

export default ViewProduct;
