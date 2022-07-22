import { CartIcon } from "../icons";
import Button from "../ui/Button";
const Counter = ({product})=>{
    return (
        <div className="flex items-center mt-8  gap-8">
        <div className="flex items-center justify-around w-[200px] rounded-md h-[50px] bg-light">
          <div className="cursor-pointer">-</div>
          <div>{product.quantity}</div>
          <div className="cursor-pointer">+</div>
        </div>
        <Button full icon={<CartIcon />}>
          Add to cart
        </Button>
      </div>
    )
}

export default Counter;