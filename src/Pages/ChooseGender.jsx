import React, { useState } from "react";
import eventLogo from "../assets/eventLogo.png";
import home from "../assets/home.png";
import back from "../assets/back.png";
import male from "../assets/male.png";
import female from "../assets/female.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ChooseGender() {
  const navigate = useNavigate();
  const [genderSelectedMale, setGenderSelectedMale] = useState(false);
  const [genderSelectedFemale, setGenderSelectedFemale] = useState(false);

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateBack = () => {
    navigate(-1);
  };

  const notifyFailure = () =>
    toast.error("Select your Gender", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "dark",
    });

  const navigateToClickSelfie = () => {
    if (genderSelectedMale || genderSelectedFemale) {
      navigate("/click-selfie");
    } else {
      notifyFailure();
    }
  };

  const handleSetMaleGender = () => {
    setGenderSelectedFemale(false);
    localStorage.setItem("Gender", "Male");
    setGenderSelectedMale((prev) => !prev);
  };

  const handleSetFemaleGender = () => {
    setGenderSelectedMale(false);
    localStorage.setItem("Gender", "Female");
    setGenderSelectedFemale((prev) => !prev);
  };
  return (
    <>
      <ToastContainer />
      <div className="event-logo-container">
        <img className="event-logo" src={eventLogo} alt="logo" />
      </div>
      <img src={back} onClick={navigateBack} alt="back" className="back" />
      <img src={home} onClick={navigateToHome} alt="home" className="home" />

      <p className="gender-text">Choose Your Gender</p>
      <div className="gender-avatar-container">
        <div className="gender-avatar-male-container">
          <img
            onClick={handleSetMaleGender}
            src={male}
            alt="male"
            className={
              genderSelectedMale
                ? "selected-gender-avatar-male"
                : "gender-avatar-male"
            }
          />
          <span className="male-text">MALE</span>
        </div>
        <div className="gender-avatar-female-container">
          <img
            onClick={handleSetFemaleGender}
            src={female}
            alt="female"
            className={
              genderSelectedFemale
                ? "selected-gender-avatar-female"
                : "gender-avatar-female"
            }
          />
          <span className="female-text">FEMALE</span>
        </div>
      </div>

      <div className="choose-gender-description-container">
        <p className="choose-gender-description">
          Take 2 minutes to turn your selfie into an amazing snap with AI Magic
        </p>
      </div>
      <div className="button-container">
        <button className="global-btn" onClick={navigateToClickSelfie}>
          SUBMIT
        </button>
      </div>
    </>
  );
}
