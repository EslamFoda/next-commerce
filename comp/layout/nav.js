import styles from "../../styles/Nav.module.css";
import Popover from "../ui/popover";
import Tooltip from "../ui/tooltip";
import Cart from "../cart";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navLinks } from "../../constant";
import { MenuIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Drawer from "../ui/drawer";
import { SearchIcon, CartIcon, UserIcon, SettingIcon } from "../icons";
import { useState } from "react";
const Nav = () => {
  const { query, route } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center p-2 bg-white shadow-sm">
        <MenuIcon
          onClick={() => {
            setIsOpen(true);
          }}
          className="w-5 h-5 cursor-pointer block lg:hidden"
        />
        <div className="flex gap-6 items-center">
          <div className="relative w-[95px] h-[22px]">
            <Image
              src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_190x.png?v=1551529109%202x"
              layout="fill"
            />
          </div>

          <div className="hidden lg:flex items-center gap-7 flex-1">
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
          </div>
        </div>

        <div className={styles.right}>
          <Tooltip className="mt-3" placement="bottom-center" text="Search">
            <span>
              <SearchIcon />
            </span>
          </Tooltip>
          <Popover
            button={
              <Tooltip className="mt-3" placement="bottom-center" text="Cart">
                <span className="block mt-1">
                  <CartIcon />
                </span>
              </Tooltip>
            }
          >
            <Cart />
          </Popover>
          <div className="hidden lg:block">
            <UserIcon />
          </div>
          <div className="hidden lg:block">
            <SettingIcon />
          </div>
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-y-3 pt-4">
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
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
