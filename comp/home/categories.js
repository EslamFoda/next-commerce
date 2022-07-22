import Image from "next/image";
import Button from "../ui/Button";
const Categories = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  mt-4 p-4 gap-4  sm:h-[800px]  lg:h-[600px] ">
      <div className="relative  h-[250px] sm:h-full group order-4  lg:order-1 md:order-1 overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_03_624x.jpg?v=1542298540%202x"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button variant="secondary">SALE</Button>
        </div>
      </div>
      <div className="relative h-[250px] sm:h-full order-5 lg:order-2 md:order-2 group overflow-hidden row-span-1 sm:row-span-2">
        <Image
          className="group-hover:scale-110 transition-all duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_06_624x.jpg?v=1542298540%202x"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button variant="secondary">WOMEN</Button>
        </div>
      </div>
      <div className="relative h-[250px] sm:h-full order-6 lg:order-3 md:order-3 group overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_05_624x.jpg?v=1542298540%202x"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button variant="secondary">MEN</Button>
        </div>
      </div>
      <div className="relative h-[250px] sm:h-full lg:order-4 md:order-4 group overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_07_624x.jpg?v=1542298540%202x"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button variant="secondary">ACCESSORIES</Button>
        </div>
      </div>
      <div className="relative h-[250px] sm:h-full lg:order-5 md:order-5 group overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_04_624x.jpg?v=1542298540%202x"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button variant="secondary">NEW</Button>
        </div>
      </div>
      <div className="relative h-[250px] sm:h-full lg:order-6 md:order-6 group col-span-1 sm:col-span-2 overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_08_1290x.jpg?v=1542298540 2x"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button variant="secondary">SHOES</Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
