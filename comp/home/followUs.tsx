import Header from "../common/header";
import Image from "next/image";
import { InstaIcon } from "../icons";
import { insta } from "../../constant/index";
import Grid from "../ui/Grid";
const FollowUs = () => {
  return (
    <>
      <Header title={"@ FOLLOW US ON"} subTitle="INSTAGRAM" />
      <Grid layout="D">
        {insta.map((link, i) => {
          return (
            <div
              key={i}
              className="h-60 lg:h-56 sm:h-60 relative cursor-pointer group transition-all duration-700"
            >
              <Image
               
                alt="follow us image"
                src={link.image}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute opacity-0 flex top-0 right-0 w-full h-full group-hover:opacity-100 justify-center items-center bg-gray-800 bg-opacity-70 transition-all duration-300">
                <InstaIcon />
              </div>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default FollowUs;
