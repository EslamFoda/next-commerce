import { useEffect, useState } from "react";
import ProdCard from "../common/prodCard";
import { Grid2, Grid3, List } from "../icons";
import Grid from "../ui/Grid";
import { useRouter } from "next/router";
import Spinner from "../ui/spinner";
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
}) => {
  const { query } = useRouter();
  const [grid, setGrid] = useState(3);
  const [collections, setCollections] = useState(null);
  useEffect(() => {
    setCollections(
      query.id === "Trending" || query.id === "Best-Seller"
        ? trendingAndBestSellers
        : collection
    );
  }, [query.id]);
  const handleChangeGrid = (grid, i) => {
    setGrid(grid.layout);
    const updateActive = gridLayout.map((obj) =>
      obj.id === i ? { ...obj, active: true } : { ...obj, active: false }
    );
    gridLayout = updateActive;
  };
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          {type} ({collections?.length || 0})
        </h1>

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
                );
              })}
            </>
          ) : (
            <>
              {" "}
              {collections?.map((item) => {
                return (
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
