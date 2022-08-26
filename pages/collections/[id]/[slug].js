import { getSingleProduct, getAllProd } from "../../../services";
import Breadcrumb from "../../../comp/ui/breadcrumb";
import ViewProduct from "../../../comp/product-page";
// import RecentlyView from "../../../comp/product-page/recentlyViewProd";
// import RencentlyView from '../../../comp/product-page/recenltyViewd'
import { useAppContext } from "../../../context/AppContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import KeenSlider from "../../../comp/ui/keenSlider";

const CollectionProduct = ({ product, allProd }) => {
  const { storeProducts } = product;
  const router = useRouter();
  const { slug } = router.query;
  const { seenProducts, dispatch } = useAppContext();

  const [related, setRelated] = useState(null);
  const [custom, setCustom] = useState(null);
  // useEffect(() => {
  //   const filterDublicatProd = seenProducts.filter((prod) => {
  //     return prod.slug !== slug;
  //   });

  //   dispatch({ type: "REMOVE_DUBLICATES", payload: filterDublicatProd });
  // }, []);
  useEffect(() => {
    const findType = allProd?.storeProducts?.filter((prod) => {
      return storeProducts[0]?.productType === prod.productType;
    });
    setRelated(findType);
   
  }, [storeProducts[0]]);
  useEffect(()=>{
    const customProd = allProd?.storeProducts?.filter((prod) => {
      return storeProducts[0]?.vendor === prod.vendor;
    });
    setCustom(customProd);
  },[storeProducts[0]])
  return (
    <div className="mb-24">
      <Breadcrumb base="home" type={storeProducts[0]?.type} slug={storeProducts[0]?.slug} />
      <ViewProduct product={storeProducts[0]} />
      <KeenSlider type='related' data={related} title="RELATED PRODUCTS" />
      <KeenSlider type='vendor' data={custom} title="VENDOR PRODUCTS" />
    </div>
  );
};

export default CollectionProduct;

export async function getServerSideProps({ params }) {
  const product = (await getSingleProduct(params.slug, 8)) || [];
  const allProd = (await getAllProd()) || [];

  return { props: { product, allProd } };
}
