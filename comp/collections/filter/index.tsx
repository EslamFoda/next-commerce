import CollectionsTab from "./collectionsTab";
import ShoppingTab from "./shoppingTab";
import ProductTypeTab from "./productTypeTab";
import PriceTab from "./priceTab";
const Filter = ({
  collectionsLinks,
  storeTypes,
  setStoreTypes,
  setProductTypes,
  productTypes,
  setFilterPrice,
  setIsOpen,
  filterPrice,
  setLowerBound,
  setUpperBound,
  upperBound,
  lowerBound,
}) => {
  return (
    <>
      <CollectionsTab
        setIsOpen={setIsOpen}
        collectionsLinks={collectionsLinks}
        productTypes={productTypes}
        setProductTypes={setProductTypes}
        setStoreTypes={setStoreTypes}
        storeTypes={storeTypes}
      />
      <ShoppingTab
        productTypes={productTypes}
        setProductTypes={setProductTypes}
        setStoreTypes={setStoreTypes}
        storeTypes={storeTypes}
      />
      <ProductTypeTab
        productTypes={productTypes}
        setProductTypes={setProductTypes}
        setStoreTypes={setStoreTypes}
      />
      <PriceTab
        setFilterPrice={setFilterPrice}
        filterPrice={filterPrice}
        setIsOpen={setIsOpen}
        setLowerBound={setLowerBound}
        setUpperBound={setUpperBound}
        upperBound={upperBound}
        lowerBound={lowerBound}
      />
    </>
  );
};
export default Filter;
