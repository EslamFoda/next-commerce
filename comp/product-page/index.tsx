import SinglePageSlider from "../product-page/slider/singlePageSlider";
import ProdInfo from "./prodInfo";

const ProductDetails = ({ product }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-8 gap-8">
      <div className='lg:sticky md:sticky md:top-0 md:self-start lg:top-0 lg:self-start'>
        <SinglePageSlider product={product} />
      </div>
      <div>
        <ProdInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
