import Link from "next/link";

const footerLinks = [
  { url: "/collections/Womens", id: 1, title: "Womens" },
  { url: "/collections/Mens", id: 2, title: "Mens" },
  { url: "/collections/Trending", id: 3, title: "Trending" },
  { url: "/collections/Best-Seller", id: 4, title: "Best Seller" },
];
const buyLinks = [
  { title: "About Us", id: 1 },
  { title: "Services", id: 2 },
  { title: "Contact Us", id: 3 },
  { title: "FAQs", id: 4 },
  { title: "Privacy Policy", id: 5 },
];
const FooterLinks = ({ buyLink = false }) => {
  return (
    <>
      {buyLink ? (
        <>
          {buyLinks.map((link) => (
            <span
              key={link.id}
              className="text-sm text-gray cursor-pointer inline-block w-fit hover:text-primary-hover transition-all"
            >
              {link.title}
            </span>
          ))}
        </>
      ) : (
        <>
          {footerLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <span
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm text-gray cursor-pointer inline-block w-fit hover:text-primary-hover transition-all"
              >
                {link.title}
              </span>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default FooterLinks;
