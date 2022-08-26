import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const NavLinks = ({ navLinks, setIsOpen, query, route, col = false }) => {
  return (
    <>
      {col ? (
        <>
          {navLinks.map((link) => {
            return (
              <div
                onClick={() => {
                  setIsOpen(false);
                }}
                key={link.id}
                className={`cursor-pointer text-gray flex w-full justify-between items-center ${
                  query.id === link.paramId || route === link.paramId
                    ? "!text-primary"
                    : ""
                } hover:text-primary-hover`}
              >
                <Link href={link.url}>{link.title}</Link>
                <ChevronRightIcon className="w-5 h-6" />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {" "}
          {navLinks.map((link) => {
            return (
              <div
                key={link.id}
                className={`cursor-pointer text-gray ${
                  query.id === link.paramId || route === link.paramId
                    ? "!text-primary"
                    : ""
                } hover:text-primary-hover`}
              >
                <Link href={link.url}>{link.title}</Link>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default NavLinks;
