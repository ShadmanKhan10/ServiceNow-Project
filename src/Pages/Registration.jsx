import React, { useState } from "react";
import eventLogo from "../assets/eventLogo.png";
import home from "../assets/home.png";
import back from "../assets/back.png";
import nameIcon from "../assets/name.png";
import emailIcon from "../assets/email.png";
import mobileIcon from "../assets/mobile.png";
import organizationIcon from "../assets/organization.png";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [organizationError, setOrganizationError] = useState("");

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateBack = () => {
    navigate(-1);
  };
  const navigateChooseGender = () => {
    navigate("/choose-gender");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };
  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setMobile(value);
    setMobileError(false);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };
  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
    setOrganizationError(false);
  };

  const validateInputs = () => {
    let isValid = true;

    if (name === "") {
      setNameError(true);
      isValid = false;
    }

    if (mobile === "") {
      setMobileError(true);
      isValid = false;
    }

    if (organization === "") {
      setOrganizationError(true);
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("MobileNo", mobile);
      localStorage.setItem("Organization", organization);

      navigateChooseGender();
      console.log("Submitted");
    }
  };

  return (
    <>
      <div className="event-logo-container">
        <img className="event-logo" src={eventLogo} alt="logo" />
      </div>
      <img src={back} onClick={navigateBack} alt="back" className="back" />
      <img src={home} onClick={navigateToHome} alt="home" className="home" />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-fields-container">
            <div className="icons-container">
              <img src={nameIcon} alt="icon" className="icons" />
            </div>
            <input
              className="inputs"
              type="text"
              onChange={handleNameChange}
              value={name}
              maxLength={30}
              placeholder="Full Name*"
            />
          </div>
          {nameError && (
            <div className="error-container">
              <p className="error">Enter your name</p>
            </div>
          )}

          <div className="input-fields-container">
            <div className="icons-container">
              <img src={mobileIcon} alt="icon" className="icons" />
            </div>
            <input
              className="inputs"
              type="text"
              onChange={handleMobileChange}
              value={mobile}
              maxLength={10}
              minLength={10}
              placeholder="Mobile Number*"
            />
          </div>
          {mobileError && (
            <div className="error-container">
              <p className="error">Enter your Mobile Number</p>
            </div>
          )}
          <div className="input-fields-container">
            <div className="icons-container">
              <img src={emailIcon} alt="icon" className="icons" />
            </div>
            <input
              className="inputs"
              type="text"
              onChange={handleEmailChange}
              value={email}
              placeholder="E-Mail ID*"
            />
          </div>
          {emailError && (
            <div className="error-container">
              <p className="error">Enter a valid Email Address</p>
            </div>
          )}
          <div className="input-fields-container">
            <div className="icons-container">
              <img src={organizationIcon} alt="icon" className="icons" />
            </div>
            <input
              className="inputs"
              type="text"
              onChange={handleOrganizationChange}
              value={organization}
              maxLength={30}
              placeholder="Organization*"
            />
          </div>
          {organizationError && (
            <div className="error-container">
              <p className="error">Enter your Organization Name</p>
            </div>
          )}
          <div className="submit-btn-container">
            <button className="submit-btn-registration">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}
