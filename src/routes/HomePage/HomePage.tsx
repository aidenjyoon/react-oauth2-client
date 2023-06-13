import React, { useContext } from "react";
import { userContext } from "../../context/Context";
import { IUser } from "../../types/userContextTypes";

const HomePage = () => {
  const context = useContext(userContext) as IUser;

  return (
    <>
      {context ? (
        <h1>Welcome Back {context.username}!</h1>
      ) : (
        <h1>Welcome To My Website!</h1>
      )}
    </>
  );
};

export default HomePage;
