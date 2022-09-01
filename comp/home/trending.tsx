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
           <>asdas</>
          );
        })}
      </Grid>
    </>
  );
};

export default Trending;
