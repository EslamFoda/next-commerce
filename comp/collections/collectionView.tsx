import Collection from "./collection";
import Filter from "./filter";
import { useState } from "react";
import Drawer from "../ui/drawer";

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
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(700);
  const [filterPrice, setFilterPrice] = useState([0, 700]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Filter
          setIsOpen={setIsOpen}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          setStoreTypes={setStoreTypes}
          storeTypes={storeTypes}
          setFilterPrice={setFilterPrice}
          filterPrice={filterPrice}
          setLowerBound={setLowerBound}
          lowerBound={lowerBound}
          setUpperBound={setUpperBound}
          upperBound={upperBound}
        />
      </Drawer>
      <div className="grid grid-cols-4 gap-5  p-4">
        <div className=" hidden lg:block">
          <div className="w-full px-4 pt-16">
            <Filter
              setIsOpen={setIsOpen}
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              setStoreTypes={setStoreTypes}
              storeTypes={storeTypes}
              setFilterPrice={setFilterPrice}
              filterPrice={filterPrice}
              setLowerBound={setLowerBound}
              lowerBound={lowerBound}
              setUpperBound={setUpperBound}
              upperBound={upperBound}
            />
          </div>
        </div>
        <div className="lg:col-span-3 col-span-4">
          <Collection
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            storeTypes={storeTypes}
            type={type}
            collection={storeProducts}
            trendingAndBestSellers={trendingAndBestSellers.storeProducts}
            typeData={typeData}
            filterPrice={filterPrice}
          />
        </div>
      </div>
    </>
  );
};

export default CollectionView;
