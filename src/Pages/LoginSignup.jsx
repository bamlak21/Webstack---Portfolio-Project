import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing I agree to the terms of use and privacy policy.</p>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span> Login Here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
