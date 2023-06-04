import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const logoutHandler = () => {
    axios.get("http://localhost:4000/logout").then((res) => {
      if (res.data) {
        window.location.href = "/";
      }
    });
  };
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
          <li onClick={logoutHandler}>Logout</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
