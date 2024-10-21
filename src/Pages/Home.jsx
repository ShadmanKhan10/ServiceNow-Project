import React from "react";
import eventLogo from "../assets/eventLogo.png";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/registration");
  };

  return (
    <>
      <div className="event-logo-container">
        <img className="event-logo" src={eventLogo} alt="logo" />
      </div>
      <div className="home-text-container">
        <p className="home-text">
          Get your <span style={{ fontWeight: "500" }}>AI AVATAR</span> here
        </p>
      </div>
      <div className="avatar-container">
        <img src={avatar} className="avatar-img" alt="avatar" />
      </div>
      <div className="button-container">
        <button className="global-btn" onClick={handleNavigation}>
          START
        </button>
      </div>
    </>
  );
}
