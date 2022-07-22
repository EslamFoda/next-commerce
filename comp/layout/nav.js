import styles from "../../styles/Nav.module.css";
import {
  SearchIcon,
  CartIcon,
  UserIcon,
  SettingIcon,
} from "../icons";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-2 bg-white shadow-sm">
      <div className="left flex gap-6 items-center">
        <div>icon</div>
        <div className="flex items-center gap-7 flex-1">
          <div>HOME</div>
          <div>SHOP</div>
          <div>PAGES</div>
          <div>BLOG</div>
          <div>PORTFOLIO</div>
          <div>WOMEN</div>
          <div>MEN</div>
          <div>BUY THEME!</div>
        </div>
      </div>

      <div className={styles.right}>
        <SearchIcon />
        <CartIcon />
        <UserIcon />
        <SettingIcon />
      </div>
    </nav>
  );
};

export default Nav;
