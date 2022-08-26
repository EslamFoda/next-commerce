import Header from "../common/header";
import ProdCard from "../mainCard";
import Grid from "../ui/Grid";
const Trending = ({ products }) => {
  const { storeProducts } = products;
  return (
    <>
      <Header title="TRENDING" subTitle="TOP WISHES OF THIS WEEK" />
      <Grid>
        {storeProducts?.map((prod) => {
          return (
            <ProdCard
              key={prod.id}
              prodImages={prod.prodImages}
              slug={prod.slug}
              type={prod.type}
              prod={prod}
              id={prod.id}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Trending;
