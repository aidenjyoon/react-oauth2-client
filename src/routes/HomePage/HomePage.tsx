import React, { useContext } from "react";
import { userContext } from "../../context/Context";
import { IUser } from "../../types/userContextTypes";

const HomePage = () => {
  const context = useContext(userContext) as IUser;

  return (
    <>
      {context ? (
        <div>Welcome Back {context.username}!</div>
      ) : (
        <div>Welcome To My Website!</div>
      )}
    </>
  );
};

export default HomePage;
