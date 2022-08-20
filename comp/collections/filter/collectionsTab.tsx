import Link from "next/link";
import MyDisclosure from "../../ui/disclosure";
import { useRouter } from "next/router";
const CollectionsTab = ({
  collectionsLinks,
  setStoreTypes,
  setProductTypes,
  productTypes,
  storeTypes,
  setIsOpen,
}) => {
  const { query } = useRouter();
  const clearFilter = () => {
    setStoreTypes([]);
    setProductTypes([...productTypes, ...storeTypes]);
    setIsOpen(false)
  };
  return (
    <MyDisclosure title="COLLECTIONS">
      {collectionsLinks.map((link) => {
        return (
          <div
            onClick={clearFilter}
            key={link.id}
            className={`cursor-pointer text-gray ${
              query.id === link.paramId ? "!text-primary" : ""
            } hover:text-primary-hover`}
          >
            <Link href={link.url}>{link.title}</Link>
          </div>
        );
      })}
    </MyDisclosure>
  );
};

export default CollectionsTab;
