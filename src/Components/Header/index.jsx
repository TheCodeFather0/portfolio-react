import React from "react";
import styles from "./style.module.css";
import usePersonalData from "../../Hooks/usePersonalData";

const Header = () => {
  const {username} = usePersonalData();
  const links = ["Home", "About", "Skills", "Work", "Contact"];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navigation}>
          <div className="logo">
            <h3>{username}</h3>
          </div>
          <nav className={styles.nav}>
            {links.map((link) => {
              return <a className={styles.links} href={`#${link.toLowerCase()}`} data-to-scrollspy-id={link.toLowerCase()}>{link}</a>;
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
