import React, { useEffect } from "react";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import AddedSuccessFully from "../common/addedSuccessFully";

const ListCard = dynamic(() => import("./listCard"));
const GridCard = dynamic(() => import("./gridCard"));

interface Props {
  prodImages?: any;
  slug?: string;
  type?: string;
  prod?: any;
  id: any;
  list?: boolean;
}

const ProdCard: React.FC<Props> = ({
  prodImages,
  slug,
  prod,
  type,
  list = false,
}) => {
  // @ts-ignore
  const [selectProd, setSelectedProd] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [addedProd, setAddProd] = useState(null);
  useEffect(() => {
    setSelectedProd(prodImages[0].url);
  }, [prodImages[0]]);
  const router = useRouter();
  const { cart, dispatch } = useAppContext();
  const addToCart = () => {
    const existProduct = cart.find((item) => prod.id === item.id);
    if (existProduct) {
      const newQuantity = (existProduct.quantity += 1);
      const product = { ...prod, quantity: newQuantity };
      dispatch({ type: "REMOVE_CART_ITEM", payload: product.id });
      dispatch({ type: "ADD_TO_CART", payload: product });
      setIsOpen(true);
      setTimeout(() => {
        setAddProd(product);
      }, 300);
    } else {
      const product = { ...prod, quantity: 1 };
      dispatch({ type: "ADD_TO_CART", payload: product });
      setIsOpen(true);
      setTimeout(() => {
        setAddProd(product);
      }, 300);
    }
    // dispatch({ type: "UPDATE_EXIST_CART_ITEM", payload: prod.id });
  };
  const pushTo = (e) => {
    e.preventDefault();
    router.push(`/collections/${type}/${slug}`);
  };
  return (
    <>
      {addedProd && (
        <AddedSuccessFully
          addedProd={addedProd}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {list ? (
        <ListCard
          prod={prod}
          pushTo={pushTo}
          addToCart={addToCart}
          selectProd={selectProd}
          setSelectedProd={setSelectedProd}
        />
      ) : (
        <GridCard
          prod={prod}
          pushTo={pushTo}
          addToCart={addToCart}
          selectProd={selectProd}
          setSelectedProd={setSelectedProd}
        />
      )}
    </>
  );
};
export default ProdCard;
