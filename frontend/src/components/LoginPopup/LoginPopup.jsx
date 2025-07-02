import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='your name' required />}
          <input type="email" placeholder='your email' required />
          <input type="password" placeholder='password' required />
        </div>
        <button>{currState === "Sign up" ? "create account" : "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>i agree to the terms and conditions</p>
        </div>
        {currState === "Login"
          ? <p>create a new account? <span onClick={() => setCurrState("Sign up")}>click here</span></p>
          : <p>already have an account? <span onClick={() => setCurrState("Login")}>login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
