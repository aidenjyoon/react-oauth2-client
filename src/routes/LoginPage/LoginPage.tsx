import React from "react";
import googleLogo from "../../assets/google_logo.png";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <>
      <div className={styles.loginPage}>
        <h1>Login</h1>
        <div className={styles.loginForm}>
          <div className={styles.googleContainer}>
            <img src={googleLogo} alt="Google Logo" />
            <p>Login with Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
