import Breadcrumb from "../../comp/ui/breadcrumb";
import { useRouter } from "next/router";
import CollectionView from "../../comp/collections/collectionView";
import { getAllProd, getCollection, getProducts } from "../../services";
import { useEffect, useState } from "react";
import request from "graphql-request";
import Head from "next/head";

const Collection = ({ collection, trendingAndBestSellers, allProd }) => {
  const { query } = useRouter();
  const [productTypes, setProductTypes] = useState(null);
  const [storeTypes, setStoreTypes] = useState([]);
  const [typeData, setTypeData] = useState(null);
  useEffect(() => {
    let types = [];
    allProd?.storeProducts?.forEach((product) => {
      types.push(product.productType);
    });
    const newBl = [...new Set(types)];
    setProductTypes(newBl);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const { storeProducts } = await request(
        "https://api-eu-west-2.hygraph.com/v2/cl5dpdx8x07s401t0csu9g8t3/master",
        `
      {
        storeProducts(where: {productType_in: ${JSON.stringify(
          storeTypes
        )}}, first: 50) {
            id
            collection
            price
            quantity
            slug
            title
            vendor
            productType
            rate
            type
            image {
              id
              url
            }
            prodImages {
              id
              url
            }
          }
      }
    `
      );
      setTypeData(storeProducts);
    };

    fetchProducts();
  }, [productTypes]);

  return (
    <>
      <Head>
        <title>{query.id} - wokiee</title>
      </Head>
      <Breadcrumb base="home" type={query.id} />
      <CollectionView
        type={query.id}
        setProductTypes={setProductTypes}
        collection={collection}
        productTypes={productTypes}
        trendingAndBestSellers={trendingAndBestSellers}
        setStoreTypes={setStoreTypes}
        storeTypes={storeTypes}
        typeData={typeData}
      />
    </>
  );
};

export default Collection;
export async function getServerSideProps({ params }) {
  const collection = (await getCollection(params.id)) || [];
  const trendingAndBestSellers = (await getProducts(params.id, 20)) || [];
  const allProd = (await getAllProd()) || [];
  return { props: { collection, trendingAndBestSellers, allProd } };
}
