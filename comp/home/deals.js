import Image from "next/image";
import Grid from "../ui/Grid";
const Deals = () => {
  return (
    <Grid layout="B">
      <div className="h-80 relative group overflow-hidden cursor-pointer">
        <Image
          priority={true}
          alt="deal image"
          className="group-hover:scale-110 transition duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_10_846x.jpg?v=1542298541%202"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max p-7 opacity-90  text-center rounded-md group-hover:p-9  transition-all duration-300">
          <span className="font-semibold">
            AUTUMN <span className="text-blue-600">2019</span>
          </span>
          <h3 className="text-2xl font-semibold">NEW ARRIVALS</h3>
        </div>
      </div>
      <div className="h-80 relative group overflow-hidden cursor-pointer">
        <Image
          priority={true}
          alt="deal image"
          className="group-hover:scale-110 transition duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_11_846x.png?v=1542367627%202x"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max p-7 opacity-90  text-center rounded-md group-hover:p-9  transition-all duration-300">
          <span className="font-semibold">NEW COLLECTION</span>
          <h3 className="text-2xl font-semibold text-blue-600">STREETSTYLE</h3>
        </div>
      </div>
      <div className="h-80 relative group overflow-hidden cursor-pointer">
        <Image
          priority={true}
          alt="deal image"
          className="group-hover:scale-110 transition duration-700"
          src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_09_846x.jpg?v=1542298541%202x"
          layout="fill"
          objectFit="cover"
        />
        <div
          style={{ maxWidth: "400px" }}
          className="bg-white absolute top-1/2 min-w-[80%] group-hover:min-w-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2    p-7 opacity-90  text-center rounded-md group-hover:p-9  transition-all duration-300"
        >
          <span className="font-semibold">GREAT SUMMEER CLEARANCE SALES </span>
          <h3 className="text-2xl font-semibold">
            GET UP TO <span className="text-blue-600 inline">70% OFF</span>
          </h3>
        </div>
      </div>
    </Grid>
  );
};

export default Deals;
