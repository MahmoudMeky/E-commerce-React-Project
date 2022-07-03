import React from 'react'
import { useState } from 'react';
import "./UserPage.css";
import { useNavigate } from 'react-router-dom';

import Register from '../Auth/register';
import Login from '../Auth/login';
import { useRef } from 'react';

export default function AboutPage() {

  const [showLogin, setShowLogin] = useState(true);

  const onClickHandler = () => {
    setShowLogin(!showLogin)
  }





  // Authentication !! 


  // - Register
  let [register, setRegister] = useState(false)
  let [registerError, setRegisterError] = useState(false)

  let reg_name = useRef()
  let reg_email = useRef()
  let reg_password = useRef()

  async function registerDataHandler() {
    let response = await Register(reg_name.current.value, reg_email.current.value, reg_password.current.value);
    // console.log(response);
    // console.log(response.status, response.data);
    switch (response.status) {
      case 400:
        setRegisterError(response.data)
        break;
      case 409:
        setRegisterError(response.data)
        break;
      case 201:
        setRegisterError(false);
        setRegister(true);
        const token = response.data.token;
        // console.log(token)
        // console.log(`Token is ${token}`)

        break;

      default:
        break;
    }


  }

  let navigate = useNavigate();

  function navigateToHome() {
    setTimeout(() => {
      navigate("/home", { replace: true })
    }, 1000)
    return <h6 className='m-0 text-uppercase text-center fw-bold'>Redirecting..</h6>
  }

  // - Login
  let [login, setLogin] = useState(false)
  let [loginError, setLoginError] = useState(false)

  let login_email = useRef()
  let login_password = useRef()

  async function loginDataHandler() {
    let response = await Login(login_email.current.value, login_password.current.value);
    // console.log(response);
    // console.log(response.status, response.data);
    switch (response.status) {
      case 400:
        setLoginError(response.data)
        break;
      case 404:
        setLoginError(response.data)
        break;
      case 200:
        setLoginError(false);
        setLogin(true);
        const token = response.data;
        localStorage.setItem("access_token",token)
        // console.log(token)
        // console.log(`Token is ${token}`)
        break;

      default:
        break;
    }
  }



  return (
    <div className='user-page row m-0 p-2 p-lg-5 justify-content-center align-items-center '>

      <div className="main h-100  row m-0  flex-column px-3 p-2  col-12 col-xl-8 justify-content-center  justify-content-lg-center align-items-center">

        {/* <div className="logo text-center  p-0">
          <img src="/logo.png" className='img-fluid' alt="" />
        </div> */}
        <div className='content d-flex gap-5 align-items-center'>

          <div className="left w-100 ">
            {
              showLogin &&
              <div className='login  d-flex flex-column align-items-center gap-4 h-100'>
                <h1 className='m-0 text-uppercase fw-bold'>Login</h1>

                {loginError && <h5 className='m-0 text-uppercase text-center text-danger fw-bold'>{loginError}</h5>}
                {
                  login &&
                  <h5 className='m-0 text-uppercase text-center text-danger fw-bold'>Welcome Back !</h5>
                }
                {
                  login &&
                  navigateToHome()
                }



                <form className='d-flex flex-column gap-4 w-100'>
                  <input type="email" name='email' placeholder='Email Address' className='input-style shadow-sm' ref={login_email} />
                  <input type="password" minLength={5} name='password' placeholder='Password' className='input-style shadow-sm' ref={login_password} />
                  <div className='d-flex gap-2 align-items-center form-check form-switch'>
                    <input type="checkbox" name="remember" id="remember" className='form-check-input mt-0 ' defaultChecked />
                    <label htmlFor="remember">Keep me signed in</label>
                  </div>
                  {/* <button type="submit" className='text-uppercase btn btn-dark'>Login</button> */}
                  <button type="button" className='text-uppercase btn btn-dark' onClick={loginDataHandler}>Login</button>
                  <div className='d-flex flex-column flex-md-row justify-content-between'>
                    <a href='#' className='text-center text-danger mb-2'>Forget your password?</a>
                    <span className='text-center text-secondary'>Not a member yet?<button onClick={onClickHandler} type="button" className='text-center sign-in'>Join us</button> </span>
                  </div>
                </form>
              </div>
            }
            {
              !showLogin &&
              <div className='register  d-flex flex-column align-items-center gap-4 h-100   '>
                <h1 className='m-0 text-uppercase fw-bold'>Register</h1>


                {registerError && <h5 className='m-0 text-uppercase text-center text-danger fw-bold'>{registerError}</h5>}
                {
                  register &&
                  <h5 className='m-0 text-uppercase text-center text-danger fw-bold'>You have successfully registered</h5>
                }
                {
                  register &&
                  navigateToHome()
                }


                <form action="" method='' className='d-flex flex-column gap-4 w-100'>
                  <input type="text" name='name' placeholder='Your Name' className='input-style shadow-sm' ref={reg_name} />
                  <input type="email" name='email' placeholder='Email Address' className='input-style shadow-sm' ref={reg_email} />
                  <input type="password" minLength={5} name='password' placeholder='Password' className='input-style shadow-sm' ref={reg_password} />
                  {/* <input type="password" minLength={5} name='password' placeholder='Confirm Password' className='input-style shadow-sm' /> */}
                  <div className='d-flex gap-2 align-items-center form-check form-switch'>
                    <input type="checkbox" name="subscribeToNews" id="subscribe" className='form-check-input mt-0 ' defaultChecked />
                    <label htmlFor="subscribe">Subscribe to our news.</label>
                  </div>
                  {/* <button type="submit" className='text-uppercase btn btn-dark'>Create your account</button> */}
                  <button type="button" onClick={registerDataHandler} className='text-uppercase btn btn-dark'>Create your account - axios</button>

                  <span className='text-center text-secondary'>Already a member? <button onClick={onClickHandler} type="button" className='text-center sign-in'> Sign In</button> </span>
                </form>
              </div>}

          </div>
          <div className="right w-100 d-none d-lg-block text-center ">
            {
              showLogin ?
                <img src="/login.svg" width={400} alt="" className='img-fluid' />
                :
                <img src="/register.svg" width={400} alt="" className='img-fluid' />

            }
          </div>
        </div>


      </div>
    </div>
  )
}
