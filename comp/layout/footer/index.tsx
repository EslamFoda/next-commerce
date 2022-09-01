import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="bg-primary-hover  items-center gap-2 px-14 py-5 lg:grid md:grid hidden  grid-cols-4">
        <span className="text-white font-semibold text-sm">
          BE IN TOUCH WITH US:{" "}
        </span>
        <div className="flex col-span-2">
          <input
            className="w-full p-2 rounded-l-md"
            type="email"
            placeholder="Enter your e-mail"
          />
          <button className="bg-[#303030] hover:bg-[#000000] transition-all text-sm w-max min-w-max rounded-r-md px-4 text-white">
            JOIN US
          </button>
        </div>
        <div className="flex items-center gap-4 justify-self-end ">
          <Image
            alt="facebook icon"
            src="/static/icons8-facebook-f.svg"
            width={"20px"}
            height="20px"
          />
          <Image
            alt="google icon"
            src="/static/icons8-google.svg"
            width={"20px"}
            height="20px"
          />
          <Image alt='instagram icon' src="/static/icons8-insta.svg" width={"20px"} height="20px" />
          <Image
            alt="pinterest icon"
            src="/static/icons8-pinterest.svg"
            width={"20px"}
            height="20px"
          />
          <Image
            alt="twitter icon"
            src="/static/icons8-twitter.svg"
            width={"20px"}
            height="20px"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
