import { useEffect, useState } from "react";
import ProdCard from "../mainCard";
import Grid from "../ui/Grid";
import { useRouter } from "next/router";
import Spinner from "../ui/spinner";
import ChooseGrid from "../collections/chooseGrid";

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

  return (
    <>
      <ChooseGrid
        amount={amount}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setGrid={setGrid}
        type={type}
        typeAmount={typeAmount}
      />
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
                              prodImages={item?.prodImages}
                              slug={item.slug}
                              type={type}
                              prod={item}
                              id={item.id}
                            />
                          ) : (
                            <ProdCard
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
                              prodImages={item?.prodImages}
                              slug={item.slug}
                              type={type}
                              prod={item}
                              id={item.id}
                            />
                          ) : (
                            <ProdCard
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
