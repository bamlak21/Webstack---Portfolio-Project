import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Log In</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder="Your username" />
          <input type="password" placeholder="Enter Password" />
          <span>Forgot Password?</span>
        </div>

        <button>Continue</button>
        <p className="loginsignup-login">
          Don't have an account?
          <span>
            <Link to="/loginsign"> Signup Here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
