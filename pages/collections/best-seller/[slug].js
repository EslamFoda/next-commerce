import { getSingleProduct } from "../../../services";
import Breadcrumb from "../../../comp/ui/breadcrumb";
import ProductDetails from "../../../comp/product-page/";
import RecentlyView from "../../../comp/product-page/recentlyViewProd";
import { useAppContext } from "../../../context/AppContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
const bestSellersId = ({ product }) => {
  const { storeProducts } = product;
  const router = useRouter();
  const { slug } = router.query;
  const { seenProducts, dispatch } = useAppContext();
  useEffect(() => {
    console.log(slug);
    console.log(seenProducts);

    const filterDublicatProd = seenProducts.filter((prod) => {
      return prod.slug !== slug;
    });

    dispatch({ type: "REMOVE_DUBLICATES", payload: filterDublicatProd });
  }, []);
  return (
    <>
      <Breadcrumb type={storeProducts[0]?.type} slug={storeProducts[0]?.slug} />
      <ProductDetails product={storeProducts[0]} />
      <RecentlyView seenProducts={seenProducts} />
    </>
  );
};

export default bestSellersId;

export async function getServerSideProps({ params }) {
  const product = (await getSingleProduct(params.slug, 8)) || [];

  return { props: { product } };
}
