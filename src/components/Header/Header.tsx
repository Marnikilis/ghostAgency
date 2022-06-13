import React, { useState } from "react";
//@ts-ignore
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../UI/Logo";
import MenuToggle from "./MenuToggle/MenuToggle";
import Backdrop from "./Backdrop/Backdrop";

const Header = ({
  color = "white",
  logoColor = "white",
  backgroundColor = "#303056",
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <NavLink to="/">
          <Logo color={logoColor} />
        </NavLink>
        <div
          className={cls.join(" ")}
          style={{ background: isOpen ? backgroundColor : "none" }}
        >
          <NavLink style={{ color }} to="/graveyard">
            Graveyard
          </NavLink>
          <NavLink style={{ color }} to="/trackrecord">
            Track Record
          </NavLink>
          <NavLink style={{ color }} to="/services">
            Services
          </NavLink>
          <NavLink style={{ color }} to="/more">
            Know More
          </NavLink>
          <button style={btnStyles} className={styles.btn}>
            Support
          </button>
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
