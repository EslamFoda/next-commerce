import { useEffect, useState } from "react";
import ProdCard from "../common/prodCard";
import { Grid2, Grid3, List } from "../icons";
import Grid from "../ui/Grid";
import { useRouter } from "next/router";
import { FilterIcon } from "@heroicons/react/outline";
import Spinner from "../ui/spinner";
import Drawer from "../ui/drawer";
let gridLayout = [
  { icon: List, id: 0, layout: 1, active: false },
  { icon: Grid2, id: 1, layout: 2, active: false },
  { icon: Grid3, id: 2, layout: 3, active: true },
];

const Collection = ({
  type,
  collection,
  trendingAndBestSellers,
  storeTypes,
  typeData,
  filterPrice,
  setIsOpen,
  isOpen,
}) => {
  const { query } = useRouter();
  const [grid, setGrid] = useState(3);
  const [collections, setCollections] = useState(null);
  const [amount, setAmount] = useState([]);
  const [typeAmount, setTypeAmount] = useState([]);

  useEffect(() => {
    setCollections(
      query.id === "Trending" || query.id === "Best-Seller"
        ? trendingAndBestSellers
        : collection
    );

    const getAmount = collections?.filter((prod) => {
      return prod.price > filterPrice[0] && prod.price < filterPrice[1];
    });
    const getTypeAmount = typeData?.filter((prod) => {
      return prod.price > filterPrice[0] && prod.price < filterPrice[1];
    });

    setTypeAmount(getTypeAmount);
    setAmount(getAmount);
  }, [query.id, filterPrice, typeData]);
  const handleChangeGrid = (grid, i) => {
    setGrid(grid.layout);
    const updateActive = gridLayout.map((obj) =>
      obj.id === i ? { ...obj, active: true } : { ...obj, active: false }
    );
    gridLayout = updateActive;
  };

  return (
    <>
      {" "}
      <h1 className="text-2xl block text-center mb-5 lg:hidden">
        {type} ({typeAmount?.length || amount?.length || 0})
      </h1>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl hidden lg:block">
          {type} ({typeAmount?.length || amount?.length || 0})
        </h1>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex  lg:hidden items-center gap-2 hover:text-font-color cursor-pointer transition-colors text-primary"
        >
          <FilterIcon className="w-4 h-4" />
          <span>FILTER</span>
        </div>

        <div className="flex items-center gap-2">
          {gridLayout.map((grid, i) => {
            return (
              <div
                key={grid.id}
                onClick={() => {
                  handleChangeGrid(grid, i);
                }}
                className={`cursor-pointer ${grid.active ? "active" : ""}`}
              >
                {grid.icon()}
              </div>
            );
          })}
        </div>
      </div>
      {/* @ts-ignore */}
      <Grid layout={grid}>
        <>
          {storeTypes.length ? (
            <>
              {typeData?.map((item) => {
                return (
                  <>
                    {item.price > filterPrice[0] &&
                      item.price < filterPrice[1] && (
                        <div key={item.id}>
                          {grid === 1 ? (
                            <ProdCard
                              list={true}
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
                          ) : (
                            <ProdCard
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
                          )}
                        </div>
                      )}
                  </>
                );
              })}
            </>
          ) : (
            <>
              {" "}
              {collections?.map((item) => {
                return (
                  <>
                    {item.price > filterPrice[0] &&
                      item.price < filterPrice[1] && (
                        <div key={item.id}>
                          {grid === 1 ? (
                            <ProdCard
                              list={true}
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
                          ) : (
                            <ProdCard
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
                          )}
                        </div>
                      )}
                  </>
                );
              })}
            </>
          )}
        </>
      </Grid>
      {!collections && <Spinner />}
    </>
  );
};
export default Collection;
