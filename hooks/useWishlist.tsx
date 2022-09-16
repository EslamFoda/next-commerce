import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const useWishlist = () => {
  const [fav, setFav] = useState(0);
  const { wishlist } = useAppContext();

  useEffect(() => {
    setFav(wishlist.length);
  }, [wishlist]);

  return { fav };
};

export default useWishlist;
