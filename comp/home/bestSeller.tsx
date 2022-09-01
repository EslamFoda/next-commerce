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
            <div key={prod.id}>
              <ProdCard
                prodImages={prod.prodImages}
                slug={prod.slug}
                type={prod.type}
                prod={prod}
                id={prod.id}
              />
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default BestSellers;
