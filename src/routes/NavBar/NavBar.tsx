import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className={styles.navBarWrapper}>
        <ul className={styles.navBar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
