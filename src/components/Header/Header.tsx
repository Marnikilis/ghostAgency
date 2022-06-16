import React, { useEffect, useState } from "react";
//@ts-ignore
import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../UI/Logo";
import MenuToggle from "./MenuToggle/MenuToggle";
import Backdrop from "./Backdrop/Backdrop";

const Header = ({
  color = "white",
  logoColor = "white",
  backgroundColor = "#303056",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const onScrollHandler = (id) => {
    document.getElementById(`${id}`).scrollIntoView();
  };

  useEffect(() => {
    if (pathname === "/graveyard" || pathname === "/") {
      onScrollHandler("first");
    } else if (pathname === "/trackrecord") {
      onScrollHandler("second");
    } else if (pathname === "/support") {
      onScrollHandler("third");
    }
  }, []);

  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  const menuCloseHandler = () => {
    setIsOpen(false);
  };

  const cls = [styles.nav];
  if (!isOpen) {
    cls.push(styles.close);
    cls.push();
  }

  const btnStyles = {
    color,
    border: `2px solid ${color}`,
  };

  return (
    <header>
      <div className={styles.container}>
        <NavLink to="/" onClick={() => onScrollHandler("first")}>
          <Logo color={logoColor} />
        </NavLink>
        <div
          className={cls.join(" ")}
          style={{ background: isOpen ? backgroundColor : "none" }}
        >
          <NavLink
            style={{ color }}
            to="/graveyard"
            onClick={() => onScrollHandler("first")}
          >
            Graveyard
          </NavLink>
          <NavLink
            style={{ color }}
            to="/trackrecord"
            onClick={() => onScrollHandler("second")}
          >
            Track Record
          </NavLink>
          <NavLink
            style={btnStyles}
            to="/support"
            className={styles.btn}
            onClick={() => onScrollHandler("third")}
          >
            Support
          </NavLink>
        </div>
        <MenuToggle
          onToggle={toggleMenuHandler}
          isOpen={isOpen}
          color={color}
        />
        {isOpen && <Backdrop onClick={menuCloseHandler} />}
      </div>
    </header>
  );
};

export default Header;
