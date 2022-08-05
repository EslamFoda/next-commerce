import Rate from "../common/rate";
import Button from "../ui/Button";
import Counter from "./counterWithBtn";
import Guides from "./guides";
import TermsAndConditions from "./termsAndCond";
import AddToWishlist from "./addToWishlist";
import Collapse from "../common/collapse";
import ProductType from "./prdductType";
import ProdDetails from "./prodDetails";
const ProdInfo = ({ product }) => {
  return (
    <div>
      <ProdDetails price={product?.price} title={product?.title} />
      <div className="flex items-center gap-3">
        <Rate rate={product.rate} />
        <span className="text-primary">8 reviews</span>
      </div>
      <Guides />
      <Counter product={product} />
      <TermsAndConditions />
      <Button variant="custom" full>
        BUY IT NOW
      </Button>
      <AddToWishlist />
      <ProductType product={product} />
      <div className="mt-8">
        <Collapse
          title="DESCRIPTION"
          desc={
            "We are proud to present our best premium Shopify theme - Wokiee. This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy. Please, take a look at feature list and compare with our competitors. You can buy our theme and start your business online with minimal time investments. Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is powerfool tool to create personal webshop."
          }
        />
        <Collapse title="ADDITIONAL INFORMATION" details />
      </div>
    </div>
  );
};

export default ProdInfo;
