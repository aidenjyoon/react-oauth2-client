import React, { useContext } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { userContext } from "../../context/Context";
import { IUser } from "../../types/userContextTypes";

const NavBar = () => {
  const userObject = useContext(userContext) as IUser;

  const logoutHandler = () => {
    axios
      .get("https://react-20-backend.onrender.com/auth/logout", {
        withCredentials: true,
      }) // withCredentials allows express server to access my cookies to know which session to logout.
      .then((res: AxiosResponse) => {
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
          {userObject ? (
            <li onClick={logoutHandler}>Logout</li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
