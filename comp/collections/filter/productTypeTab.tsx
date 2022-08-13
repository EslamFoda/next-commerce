import MyDisclosure from "../../ui/disclosure";

const ProductTypeTab = ({ setStoreTypes, setProductTypes, productTypes }) => {
  return (
    <MyDisclosure title="PRODUCT TYPE">
      {productTypes?.map((type, i) => {
        return (
          <span
            onClick={() => {
              const filter = productTypes?.filter((prodType) => {
                return prodType !== type;
              });
              setStoreTypes((oldArray) => [...oldArray, type]);
              setProductTypes(filter);
            }}
            key={i}
            className="block cursor-pointer text-gray  hover:text-primary-hover"
          >
            {type}
          </span>
        );
      })}
    </MyDisclosure>
  );
};
export default ProductTypeTab;
