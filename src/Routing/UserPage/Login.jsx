import React from 'react'
import LoginAuth from "../../Auth/login";
import { useRef } from "react";
import { useState } from "react";

export default function Login(props) {



    // - Login
    let [login, setLogin] = useState(false);
    let [loginError, setLoginError] = useState(false);

    let login_email = useRef();
    let login_password = useRef();

    async function loginDataHandler(e) {
        e.preventDefault();


        let response = await LoginAuth(
            login_email.current.value,
            login_password.current.value
        );
        // console.log(response);
        // console.log(response.status, response.data);
        switch (response.status) {
            case 400:
                setLoginError(response.data);
                break;
            case 404:
                setLoginError(response.data);
                break;
            case 200:
                setLoginError(false);
                setLogin(true);
                const token = response.data;
                localStorage.setItem("access_token", token);
                // console.log(token)
                // console.log(`Token is ${token}`)
                break;

            default:
                break;
        }
    }






    return (
        <div className="content d-flex gap-5 align-items-center">


            <div className="left w-100 ">

                <div className="login  d-flex flex-column align-items-center gap-4 h-100">
                    <h1 className="m-0 text-uppercase fw-bold">Login</h1>

                    {loginError && (
                        <h5 className="m-0 text-uppercase text-center text-danger fw-bold">
                            {loginError}
                        </h5>
                    )}
                    {login && (
                        <h5 className="m-0 text-uppercase text-center text-danger fw-bold">
                            Welcome Back !
                        </h5>
                    )}
                    {login && props.navigateHome()}

                    <form className="d-flex flex-column gap-4 w-100">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="input-style shadow-sm"
                            ref={login_email}
                        />
                        <input
                            type="password"
                            minLength={5}
                            name="password"
                            placeholder="Password"
                            className="input-style shadow-sm"
                            ref={login_password}
                        />
                        <div className="d-flex gap-2 align-items-center form-check form-switch">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="form-check-input mt-0 "
                                defaultChecked
                            />
                            <label htmlFor="remember">Keep me signed in</label>
                        </div>
                        <button type="submit" className='text-uppercase btn btn-dark' onClick={loginDataHandler}>Login</button>
                        {/* <button
                            type="button"
                            className="text-uppercase btn btn-dark"
                            // onClick={loginDataHandler}
                        >
                            Login
                        </button> */}
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <a href="#" className="text-center text-danger mb-2">
                                Forget your password?
                            </a>
                            <span className="text-center text-secondary">
                                Not a member yet?
                                <button
                                    onClick={props.toggleLogin}
                                    type="button"
                                    className="text-center sign-in"
                                >
                                    Join us
                                </button>{" "}
                            </span>
                        </div>
                    </form>
                </div>

            </div>
            <div className="right w-100 d-none d-lg-block text-center ">

                <img src="/login.svg" width={400} alt="" className="img-fluid" />

            </div>


        </div>
    )
}
