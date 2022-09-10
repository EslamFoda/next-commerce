import Image from "next/image";
import { payment } from "../../../../constant";

const CopyRight = () => {
  return (
    <div className="flex px-4 py-6 gap-y-5 lg:flex-row md:flex-row flex-col justify-between items-center">
      <div className="flex lg:flex-row md:flex-row flex-col items-center gap-4">
        <div className="relative w-[95px] h-[22px]">
          <Image
            alt="logo"
            src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_190x.png?v=1551529109%202x"
            layout="fill"
          />
        </div>
        <span className="text-sm text-gray">
          © Wokiee 2022. All Rights Reserved
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 gap-y-2">
        {payment.map((pay) => {
          return (
            <div
              key={pay.id}
              className="relative cursor-pointer h-[40px] w-[62px]"
            >
              <Image alt="payment image" src={pay.url} layout="fill" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CopyRight;
