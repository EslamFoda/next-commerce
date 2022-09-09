import Image from "next/image";
import { useAppContext } from "../../../context/AppContext";

const CheckoutProducts = () => {
  const { cart } = useAppContext();
  return (
    <div>
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            className="flex mb-5 gap-y-4 items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="relative border border-solid border-gray-border  w-20 h-20">
                <Image
                  src={product.prodImages[0]?.url}
                  layout="fill"
                  alt="product image"
                />
                <div className="absolute -top-2 -right-2 text-white text-xs h-5 w-5 rounded-full bg-gray flex items-center justify-center">
                  {product.quantity}
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-base text-font-color">
                  {product.title}
                </span>
                <span className="text-sm text-gray">{product.productType}</span>
              </div>
            </div>
            <div>
              <span>${product.price * product.quantity}.00</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutProducts;
