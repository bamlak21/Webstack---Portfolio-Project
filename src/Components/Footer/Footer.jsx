import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <h2>The Hanger</h2>
        <div className="footer-socials">
          <ul>
            <li>
              <FaInstagram size={42} />
            </li>
            <li>
              <FaTwitter size={42} />
            </li>
            <li>
              <FaFacebook size={42} />
            </li>
          </ul>
        </div>
        <br />
        <div className="footer-links">
          <ul>
            <h3>Company</h3>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Find Us</li>
          </ul>

          <ul>
            <h3>Legal</h3>
            <li>Terms</li>
            <li>privacy</li>
            <li>License</li>
          </ul>

          <ul>
            <h3>Support</h3>
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Supplies</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p> &copy; The Hanger {year}, All Rights Reserved!</p>
      </div>
    </>
  );
};

export default Footer;
