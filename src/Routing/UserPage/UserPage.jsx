import React from "react";
import { useState } from "react";
import "./UserPage.css";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function AboutPage() {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginHandler = () => {
    setShowLogin(!showLogin);
  };

  let navigate = useNavigate();

  function navigateToHome() {
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2000);
    return (
      <h6 className="m-0 text-uppercase text-center fw-bold">Redirecting..</h6>
    );
  }

  return (
    <div className="user-page row m-0 p-2 p-lg-5 justify-content-center align-items-center ">
      <div className="main h-100  row m-0  flex-column px-3 p-2  col-12 col-xl-8 justify-content-center  justify-content-lg-center align-items-center">
        
        {showLogin ?

        <Login toggleLogin={showLoginHandler} navigateHome={navigateToHome} />

        : 
        
        <Register toggleLogin={showLoginHandler} navigateHome={navigateToHome} />}


      </div>
    </div>
  );
}
