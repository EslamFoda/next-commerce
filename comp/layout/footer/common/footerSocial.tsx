import Image from "next/image";
const FooterSocial = ({social}) => {
  return (
    <div className="flex  items-center gap-4 justify-self-end ">
      {social.map((icon) => {
        return (
          <Image
            className="cursor-pointer"
            key={icon.id}
            alt={icon.alt}
            src={icon.url}
            width="20px"
            height="20px"
          />
        );
      })}
    </div>
  );
};
export default FooterSocial;
