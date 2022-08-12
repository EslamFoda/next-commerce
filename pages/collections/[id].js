import Breadcrumb from "../../comp/ui/breadcrumb";
import { useRouter } from "next/router";
import CollectionView from '../../comp/collections/collectionView'
import { getCollection,getProducts } from "../../services";
const Collection = ({collection,trendingAndBestSellers}) =>{
    const {query} = useRouter()
   
   
    
    return(
        <>
        <Breadcrumb base="home" type={query.id}  />
        <CollectionView type={query.id} collection={collection} trendingAndBestSellers={trendingAndBestSellers}/>
        </>
    )
}

export default Collection;
export async function getServerSideProps({ params }) {
    const collection = (await getCollection(params.id)) || [];
    const trendingAndBestSellers = (await getProducts(params.id, 20)) || [];
    return { props: { collection,trendingAndBestSellers } };
  }
  