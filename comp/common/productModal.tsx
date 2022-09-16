import Image from "next/image";
import Counter from "../product-page/counterWithBtn";
import ProductType from "../product-page/prdductType";
import ProdDetails from "../product-page/prodDetails";
import { XCircleIcon } from "@heroicons/react/outline";
import Grid from "../ui/Grid";

const ProductModal = ({ prod,setIsOpen }) => {
  return (
    <Grid className="p-0 relative" layout="E">
      <XCircleIcon onClick={()=>{setIsOpen(false)}} className="absolute lg:top-0 md:top-0 md:right-0 cursor-pointer hover:text-primary -top-5 -right-5 lg:right-0 w-5 h-5" />
      <div className="relative h-96 w-full">
        <Image
          alt="product image"
          src={prod.prodImages[0].url}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
      <div>
        <ProdDetails
          rate={prod?.rate}
          title={prod?.title}
          price={prod?.price}
        />
        <p className="text-gray text-sm">
          We are proud to present our best premium Shopify theme - Wokiee. This
          is multi-purpose software that can be used for any type of the store.
          Great variety of available...
        </p>
        <Counter modal={true} product={prod} />
        <div className="mt-7">
          <ProductType product={prod} />
        </div>
      </div>
    </Grid>
  );
};
export default ProductModal;
