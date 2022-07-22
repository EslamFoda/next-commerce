import SinglePageSlider from "../product-page/slider/singlePageSlider";
import ProdInfo from "./prodInfo";
const ProductDetails = ({ product }) => {
  return (
    <div className="grid grid-cols-2 p-8 gap-8">
      <div className='sticky top-0 self-start'>
        <SinglePageSlider product={product} />
      </div>
      <div>
        <ProdInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
