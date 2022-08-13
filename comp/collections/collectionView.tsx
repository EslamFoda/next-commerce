import Collection from "./collection";
import { useRouter } from "next/router";
import Link from "next/link";
import MyDisclosure from "../ui/disclosure";
import { collectionsLinks } from "../../constant";
import { XIcon } from "@heroicons/react/solid";
import Filter from "./filter";
import Tooltip from "../ui/tooltip";

const CollectionView = ({
  type,
  collection,
  trendingAndBestSellers,
  productTypes,
  setProductTypes,
  setStoreTypes,
  storeTypes,
  typeData,
}) => {
  const { storeProducts } = collection;
  const { query } = useRouter();

  return (
    <div className="grid grid-cols-4 gap-5 h-screen p-4">
      <div className=" hidden lg:block">
        <div className="w-full px-4 pt-16">
          <Filter
            collectionsLinks={collectionsLinks}
            productTypes={productTypes}
            setProductTypes={setProductTypes}
            setStoreTypes={setStoreTypes}
            storeTypes={storeTypes}
          />
        </div>
      </div>
      <div className="lg:col-span-3 col-span-4">
        <Collection
          storeTypes={storeTypes}
          type={type}
          collection={storeProducts}
          trendingAndBestSellers={trendingAndBestSellers.storeProducts}
          typeData={typeData}
        />
      </div>
    </div>
  );
};

export default CollectionView;
