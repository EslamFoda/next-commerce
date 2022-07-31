import Image from "next/image"
import Counter from "../product-page/counter"
import ProductType from "../product-page/prdductType"
import ProdDetails from "../product-page/prodDetails"
import Grid from "../ui/Grid"

const ProductModal = ({prod})=>{
    return (
        <Grid style={{ padding: "0px " }} layout="E">
        <div className="relative h-96 w-full">
          <Image
            src={prod.image.url}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
        </div>
        <div>
          <ProdDetails title={prod?.title} price={prod?.price} />
          <p className="text-gray text-sm">
            We are proud to present our best premium Shopify theme - Wokiee.
            This is multi-purpose software that can be used for any type of
            the store. Great variety of available...
          </p>
          <Counter product={prod} />
          <div className="mt-7">
            <ProductType product={prod} />
          </div>
        </div>
      </Grid>
    )
}
export default ProductModal