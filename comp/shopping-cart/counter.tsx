import { useAppContext } from "../../context/AppContext";

const Counter = ({ item, quantity }) => {
  const { dispatch } = useAppContext();
  const decrement = () => {
    console.log("clicked dec")
    if (quantity > 1) {
      dispatch({
        type: "decrement",
        payload: { id: item.id },
      });
    }
  };
  const increment = () => {
    console.log("clicked increase")
    dispatch({
      type: "increment",
      payload: { id: item.id },
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
