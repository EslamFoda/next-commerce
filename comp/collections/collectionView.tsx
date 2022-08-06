import ProdCard from "../common/prodCard"
const CollectionView = ({type,collection})=>{
    const {storeProducts} = collection
    return (<div className="grid grid-cols-4 gap-5 h-screen p-4">
        <div className="bg-black"></div>
        <div className=" col-span-3">
            <div className="flex items-center justify-between">
            <h1>{type} ({storeProducts?.length})</h1>
            <div>
                icons
            </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
            {storeProducts?.map(item=>{
                return <ProdCard
                title={item.title}
                price={item.price}
                image={item?.image?.url}
                vendor={item.vendor}
                rate={item.rate}
                prodImages={item?.prodImages}
                slug={item.slug}
                type={type}
                prod={item}
                id={item.id}
              />
            })}
            </div>
        </div>
    </div>)
}

export default CollectionView