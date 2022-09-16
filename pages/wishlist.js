import Head from "next/head";
import Header from "../comp/common/header";
import EmptyWishList from '../comp/wishlist/emptyWishlist'
import Breadcrumb from "../comp/ui/breadcrumb";
import Wishlist from "../comp/wishlist";
import { useAppContext } from "../context/AppContext";
const WishlistPage = () => {
    const { wishlist } = useAppContext();
  return (
    <>
      <Head>
        <title>Wishlist - wokiee</title>
      </Head>
      <Breadcrumb base="Home" type="Wishlist" />
      {wishlist.length ? <Header title="WISHLIST" /> : null}
      {wishlist.length ? <Wishlist wishlist={wishlist}/> : <EmptyWishList/>}
    </>
  );
};

export default WishlistPage;
