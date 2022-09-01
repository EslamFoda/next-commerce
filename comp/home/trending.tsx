import Header from "../common/header";
import ProdCard from "../mainCard";
import Grid from "../ui/Grid";
const Trending = ({ products }) => {
  const { storeProducts } = products;
  return (
    <>
      <Header title="TRENDING" subTitle="TOP WISHES OF THIS WEEK" />
      <Grid layout={"A"}>
        {storeProducts?.map((prod) => {
          return (
            <div key={prod.id}>
              <ProdCard
              list
                prodImages={prod?.prodImages}
                slug={prod.slug}
                type={prod.type}
                prod={prod}
                id={prod.id}
              />
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Trending;
