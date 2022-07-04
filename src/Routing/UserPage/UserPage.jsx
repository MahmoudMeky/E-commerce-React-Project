import React from "react";
import { useState } from "react";
import "./UserPage.css";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

import AuthenticationCtx from "../../Store/AuthenticationContext";
import { useContext } from "react";

export default function UserPage() {
  let AuthCtx = useContext(AuthenticationCtx);

  function setLoggedIn() {
    AuthCtx.setState(true);
    return true;
  }

  const [showLogin, setShowLogin] = useState(true);

  const showLoginHandler = () => {
    setShowLogin(!showLogin);
  };

  let navigate = useNavigate();



  function navigateToHome() {

    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2000);


    if(showLogin){
      return (
        <>
          <img src="/welcome.svg" alt="" />
          <h6 className="m-0 text-uppercase text-center fw-bold">
            Redirecting...
          </h6>
        </>
      );
    }
    return (
      <>
        <h2 className="m-0 text-uppercase text-center fw-bold">
          Resitered Successfully!
        </h2>
        <h6 className="m-0 text-uppercase text-center fw-bold mt-5">
            Redirecting...
          </h6>
      </>
    );


  }

  return (
    <div className="user-page row m-0 p-2 p-lg-5 justify-content-center align-items-center ">
      <div className="main h-100  row m-0  flex-column px-3 p-2  col-12 col-xl-8 justify-content-center  justify-content-lg-center align-items-center">
        {AuthCtx.state && (
          navigateToHome()
        )
        }

        {
          !AuthCtx.state &&
          showLogin &&
          <Login
            toggleLogin={showLoginHandler}
            navigateHome={navigateToHome}
            setLoggedIn={setLoggedIn}
          />

        }
        {!AuthCtx.state && !showLogin &&
          <Register
            toggleLogin={showLoginHandler}
            navigateHome={navigateToHome}
            setLoggedIn={setLoggedIn}
          />
        }




      </div>

    </div>
  );
}
