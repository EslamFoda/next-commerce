import styles from "../../../styles/Nav.module.css";
import Popover from "../../ui/popover";
import Tooltip from "../../ui/tooltip";
import Cart from "../../cart";
import Image from "next/image";
import { useRouter } from "next/router";
import { navLinks } from "../../../constant";
import { MenuIcon } from "@heroicons/react/solid";
import Drawer from "../../ui/drawer";
import { SearchIcon, CartIcon, UserIcon, SettingIcon } from "../../icons";
import { useState } from "react";
import FilterSearch from "../../common/filterSearch";
import TopDrawer from "../../ui/topDrawer";
import NavLinks from "./navLinks";
import Headroom from "react-headroom";
const Nav = () => {
  const { query, route } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modelOpen, setModalOpen] = useState(false);
  return (
    <>
      <TopDrawer setIsOpen={setModalOpen} isOpen={modelOpen}>
        <FilterSearch setModalOpen={setModalOpen} />
      </TopDrawer>
      <Headroom>
        <nav className="flex  shadow-lg justify-between items-center p-2 bg-white shadow-sm">
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
              <NavLinks
                navLinks={navLinks}
                query={query}
                route={route}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>

          <div className={styles.right}>
            <Tooltip className="mt-3" placement="bottom-center" text="Search">
              <span
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <SearchIcon />
              </span>
            </Tooltip>
            <div className="lg:block hidden">
              <Popover
                button={
                  <Tooltip
                    className="mt-3"
                    placement="bottom-center"
                    text="Cart"
                  >
                    <span className="block mt-1">
                      <CartIcon />
                    </span>
                  </Tooltip>
                }
              >
                <Cart />
              </Popover>
            </div>
            {/* here is drawer cart */}
            <Drawer setIsOpen={setIsCartOpen} isOpen={isCartOpen}>
              <Cart setIsCartOpen={setIsCartOpen} />
            </Drawer>
            <div
              onClick={() => {
                setIsCartOpen(true);
              }}
              className="lg:hidden block"
            >
              <Tooltip className="mt-3" placement="bottom-center" text="Cart">
                <span className="block">
                  <CartIcon />
                </span>
              </Tooltip>
            </div>
            <div className="hidden lg:block">
              <UserIcon />
            </div>
            <div className="hidden lg:block">
              <SettingIcon />
            </div>
          </div>
        </nav>
      </Headroom>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-y-3 pt-4">
          <NavLinks
            col={true}
            navLinks={navLinks}
            query={query}
            route={route}
            setIsOpen={setIsOpen}
          />
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
