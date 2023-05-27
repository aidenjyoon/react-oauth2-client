import React from "react";
import googleLogo from "../../assets/google_logo.png";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  // redirects to google sign in with backend
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <>
      <div className={styles.loginPage}>
        <h1>Login</h1>
        <div className={styles.loginForm}>
          <div className={styles.googleContainer} onClick={googleLogin}>
            <img src={googleLogo} alt="Google Logo" />
            <p>Login with Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
