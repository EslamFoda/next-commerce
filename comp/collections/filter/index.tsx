import CollectionsTab from "./collectionsTab";
import ShoppingTab from "./shoppingTab";
import ProductTypeTab from "./productTypeTab";

const Filter = ({
  collectionsLinks,
  storeTypes,
  setStoreTypes,
  setProductTypes,
  productTypes,
}) => {
  return (
    <>
      <CollectionsTab
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
    </>
  );
};
export default Filter;
