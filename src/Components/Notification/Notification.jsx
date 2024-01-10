import React from "react";
import checkCircle from "../assets/check-circle.svg";
import "./Notification.css";

const Notification = () => {
  return (
    <div className="notification">
      <div className="notification-body">
        <img src={checkCircle} alt="succcess" className="notification-icon" />
        Your purchase is Complete! &#128640;
      </div>
      <div className="notification-progress"></div>
    </div>
  );
};

export default Notification;
