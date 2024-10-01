import React, { useState } from "react";
import styles from "./style.module.css";
import usePersonalData from "../../Hooks/usePersonalData";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { username } = usePersonalData();
  const [showMenu, setShowMenu] = useState(false);
  const links = ["Home", "About", "Skills", "Work", "Contact"];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navigation}>
          <div className="logo">
            <h3>{username}</h3>
          </div>
          <nav className={styles.nav}>
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  className={styles.links}
                  href={`#${link.toLowerCase()}`}
                  data-to-scrollspy-id={link.toLowerCase()}
                >
                  {link}
                </a>
              );
            })}
          </nav>

          <div className={styles.bars} onClick={() => setShowMenu(true)}>
            <FaBars />
          </div>
        </div>
      </div>

      <div
        className={showMenu ? styles.mobileMenu : styles.hideMenu}
        style={{
          right: showMenu ? 0 : "-100%",
        }}
      >
        <div
          className={styles.closeMobileMenu}
          onClick={() => setShowMenu(false)}
        >
          <IoClose />
        </div>
        {links.map((link, index) => {
          return (
            <a
              key={index}
              className={styles.links}
              href={`#${link.toLowerCase()}`}
              data-to-scrollspy-id={link.toLowerCase()}
              onClick={() => setShowMenu(false)}
            >
              {link}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
