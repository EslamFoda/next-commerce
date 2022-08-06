import Breadcrumb from "../../comp/ui/breadcrumb";
import { useRouter } from "next/router";
import CollectionView from '../../comp/collections/collectionView'
import { getCollection } from "../../services";
const Collection = ({collection}) =>{
    const {query} = useRouter()
    console.log(collection)
    return(
        <>
        <Breadcrumb base="home" type={query.id}  />
        <CollectionView type={query.id} collection={collection}/>
        </>
    )
}

export default Collection;
export async function getServerSideProps({ params }) {
    const collection = (await getCollection(params.id)) || [];
  
    return { props: { collection } };
  }
  