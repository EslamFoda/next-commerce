import { useAppContext } from "../../context/AppContext";

const Counter = ({ item, quantity }) => {
  const { dispatch } = useAppContext();
  const decrement = () => {
    if (quantity > 1) {
      console.log(item.id);
      dispatch({
        type: "decrement",
        payload: item.id,
      });
    }
  };
  const increment = () => {
    console.log(item.id);
    dispatch({
      type: "increment",
      payload: item.id,
    });
  };
  return (
    <div
      className={`flex items-center justify-around  w-[132px]
 rounded-md h-[50px] bg-light`}
    >
      <div className="cursor-pointer" onClick={decrement}>
        -
      </div>
      <div>{quantity}</div>
      <div className="cursor-pointer" onClick={increment}>
        +
      </div>
    </div>
  );
};

export default Counter;
