import React, { useRef, useState } from "react";
import RegisterAuth from "../../Auth/register";

export default function Register(props) {
    // Authentication !!

    // - Register
    let [register, setRegister] = useState(false);
    let [registerError, setRegisterError] = useState(false);

    let reg_name = useRef();
    let reg_email = useRef();
    let reg_password = useRef();

    async function registerDataHandler(e) {
        e.preventDefault();
        
        let response = await RegisterAuth(
            reg_name.current.value,
            reg_email.current.value,
            reg_password.current.value
        );
        // console.log(response);
        // console.log(response.status, response.data);
        switch (response.status) {
            case 400:
                setRegisterError(response.data);
                break;
            case 409:
                setRegisterError(response.data);
                break;
            case 201:
                setRegisterError(false);
                setRegister(true);
                const token = response.data.token;
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
                <div className="register  d-flex flex-column align-items-center gap-4 h-100   ">
                    <h1 className="m-0 text-uppercase fw-bold">Register</h1>

                    {registerError && (
                        <h5 className="m-0 text-uppercase text-center text-danger fw-bold">
                            {registerError}
                        </h5>
                    )}
                    {register && (
                        <h5 className="m-0 text-uppercase text-center text-danger fw-bold">
                            You have successfully registered
                        </h5>
                    )}
                    {register && props.setLoggedIn() && props.navigateHome(false)}

                    <form action="" method="" className="d-flex flex-column gap-4 w-100">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input-style shadow-sm"
                            ref={reg_name}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="input-style shadow-sm"
                            ref={reg_email}
                        />
                        <input
                            type="password"
                            minLength={5}
                            name="password"
                            placeholder="Password"
                            className="input-style shadow-sm"
                            ref={reg_password}
                        />
                        <div className="d-flex gap-2 align-items-center form-check form-switch">
                            <input
                                type="checkbox"
                                name="subscribeToNews"
                                id="subscribe"
                                className="form-check-input mt-0 "
                                defaultChecked
                            />
                            <label htmlFor="subscribe">Subscribe to our news.</label>
                        </div>
                        <button type="submit" className='text-uppercase btn btn-dark' onClick={registerDataHandler}>Create your account</button>


                        <span className="text-center text-secondary">
                            Already a member?{" "}
                            <button
                                onClick={props.toggleLogin}
                                type="button"
                                className="text-center sign-in"
                            >
                                {" "}
                                Sign In
                            </button>{" "}
                        </span>
                    </form>
                </div>
            </div>

            {
                
            <div className="right w-100 d-none d-lg-block text-center ">
                <img src="/register.svg" width={400} alt="" className="img-fluid" />
            </div>

            }
        </div>
    );
}
