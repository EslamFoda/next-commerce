import Header from "../common/header";
import ProdCard from "../mainCard";
import Grid from "../ui/Grid";
const BestSellers = ({ products }) => {
  const { storeProducts } = products;
  return (
    <div>
      <Header title="BEST SELLER" subTitle="TOP PRODUCTS OF THIS WEEK" />
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
    </div>
  );
};

export default BestSellers;
