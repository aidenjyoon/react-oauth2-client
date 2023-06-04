import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import NavBar from "./routes/NavBar/NavBar";
import { userContext } from "./context/Context";

function App() {
  const userObject = useContext(userContext);
  console.log("userObject: ", userObject);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {userObject ? null : <Route path="/login" element={<LoginPage />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
