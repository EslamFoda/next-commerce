import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const useCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { cart } = useAppContext();
  const getTotal = () => {
    let total = [];
    cart.forEach((item) => {
      total.push(item.price * item.quantity);
    });

    let sum = total?.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setTotalPrice(sum);
  };
  useEffect(() => {
    const initialValue = 0;
    const qunatity = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      initialValue
    );
    setTotalQuantity(qunatity);
    getTotal();
  }, [cart]);

  return { totalPrice, totalQuantity };
};

export default useCart;
