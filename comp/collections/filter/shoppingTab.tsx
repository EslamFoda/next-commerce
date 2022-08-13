import { XIcon } from "@heroicons/react/solid";
import MyDisclosure from "../../ui/disclosure";
import Tooltip from "../../ui/tooltip";

const ShoppingTab = ({
  storeTypes,
  setStoreTypes,
  setProductTypes,
  productTypes,
}) => {
  const removeSingleType = (type) => {
    const removeSelectedTypes = storeTypes.filter((productType) => {
      return productType !== type;
    });
    setStoreTypes(removeSelectedTypes);
    setProductTypes([...productTypes, type]);
  };

  const clearFilter = () => {
    setStoreTypes([]);
    setProductTypes([...productTypes, ...storeTypes]);
  };
  return (
    <>
      {storeTypes?.length ? (
        <MyDisclosure title="SHOPPING BY:">
          <span className="block ">PRODUCT TYPE:</span>
          {storeTypes?.map((type, i) => {
            return (
              <Tooltip
                key={i}
                placement="right-end"
                text={`Remove filter ${type}`}
              >
                <span
                  className="block w-max cursor-pointer text-gray  hover:text-primary-hover"
                  onClick={() => {
                    removeSingleType(type);
                  }}
                >
                  <XIcon className="w-4 h-3 inline text-font-color" /> {type}
                </span>
              </Tooltip>
            );
          })}
          <span
            onClick={clearFilter}
            className="block text-primary-hover hover:text-font-color cursor-pointer w-max"
          >
            CLEAR ALL
          </span>
        </MyDisclosure>
      ) : null}
    </>
  );
};

export default ShoppingTab;
