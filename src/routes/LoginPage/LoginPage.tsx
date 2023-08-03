import React from "react";
import googleLogo from "../../assets/googleLogo.png";
import githubLogo from "../../assets/githubImage.png";
import twitterLogo from "../../assets/twitterLogo.png";
import twitchLogo from "../../assets/twitchLogo.png";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  // redirects to google sign in with backend
  const googleLogin = () => {
    window.open("https://react-20-backend.onrender.com/auth/google", "_self");
  };
  const githubLogin = () => {
    window.open("https://react-20-backend.onrender.com/auth/github", "_self");
  };
  const twitterLogin = () => {
    window.open("https://react-20-backend.onrender.com/auth/twitter", "_self");
  };
  const twitchLogin = () => {
    window.open("https://react-20-backend.onrender.com/auth/twitch", "_self");
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
          <div
            className={`${styles.googleContainer} ${styles.githubContainer}`}
            onClick={githubLogin}
          >
            <img src={githubLogo} alt="Github Logo" />
            <p>Login with Github</p>
          </div>
          <div
            className={`${styles.googleContainer} ${styles.twitterContainer}`}
            onClick={twitterLogin}
          >
            <img src={twitterLogo} alt="Twitter Logo" />
            <p>Login with Twitter</p>
          </div>
          <div
            className={`${styles.googleContainer} ${styles.twitchContainer}`}
            onClick={twitchLogin}
          >
            <img src={twitchLogo} alt="Twitch Logo" />
            <p>Login with Twitch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
