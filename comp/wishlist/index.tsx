import ProdCard from "../mainCard";
import Grid from "../ui/Grid";

const Wishlist = ({wishlist}) => {
  return (
    <>
      <Grid>
        {wishlist.map((prod) => {
          return (
            <div key={prod.id}>
              <ProdCard
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

export default Wishlist;
