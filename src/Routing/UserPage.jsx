import React from 'react'
import { useState } from 'react';
import "./UserPage.css";


export default function AboutPage() {

  const [showLogin, setShowLogin] = useState(true);

  const onClickHandler = () => {
    setShowLogin(!showLogin)
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

                <form action="" method='POST' className='d-flex flex-column gap-4 w-100'>
                  <input type="email" name='email' placeholder='Email Address' className='input-style shadow-sm' />
                  <input type="password" minLength={5} name='password' placeholder='Password' className='input-style shadow-sm' />
                  <div className='d-flex gap-2 align-items-center form-check form-switch'>
                    <input type="checkbox" name="remember" id="remember" className='form-check-input mt-0 ' defaultChecked />
                    <label htmlFor="remember">Keep me signed in</label>
                  </div>
                  <button type="submit" className='text-uppercase btn btn-dark'>Login</button>
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
                <form action="" method='POST' className='d-flex flex-column gap-4 w-100'>
                  <input type="text" name='name' placeholder='Your Name' className='input-style shadow-sm' />
                  <input type="email" name='email' placeholder='Email Address' className='input-style shadow-sm' />
                  <input type="password" minLength={5} name='password' placeholder='Password' className='input-style shadow-sm' />
                  <input type="password" minLength={5} name='password' placeholder='Confirm Password' className='input-style shadow-sm' />
                  <div className='d-flex gap-2 align-items-center form-check form-switch'>
                    <input type="checkbox" name="subscribe" id="subscribe" className='form-check-input mt-0 ' defaultChecked />
                    <label htmlFor="subscribe">Subscribe to our news.</label>
                  </div>
                  <button type="submit" className='text-uppercase btn btn-dark'>Create your account</button>

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
