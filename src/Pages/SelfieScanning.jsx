import React, { useEffect, useState } from "react";
import eventLogo from "../assets/eventLogo.png";
import home from "../assets/home.png";
import back from "../assets/back.png";
import scanning from "../assets/scanning.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function SelfieScanning() {
  const navigate = useNavigate();
  const BASE_URL = `${import.meta.env.VITE_BASE_URL}/generate-aiphoto-op`;

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToGenetatedAvatar = () => {
    navigate("/generated-avatar");
  };
  const navigateBack = () => {
    navigate(-1);
  };
  const navigateToClickSelfie = () => {
    navigate("/click-selfie");
  };

  const notifyFailure = (errorMsg) =>
    toast.error(errorMsg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "dark",
    });

  const SendData = async () => {
    try {
      const userData = {
        name: localStorage.getItem("Name"),
        email: localStorage.getItem("Email"),
        mobileNo: localStorage.getItem("MobileNo"),
        userImage: localStorage.getItem("CapturedImage"),
        gender: localStorage.getItem("Gender"),
        organization: localStorage.getItem("Organization"),
      };
      const response = await axios.post(BASE_URL, userData);
      console.log(response);
      localStorage.setItem("Image1", response.data.image1);
      localStorage.setItem("Image2", response.data.image2);
      localStorage.setItem("Image3", response.data.image3);
      localStorage.setItem("Image4", response.data.image4);
      localStorage.setItem("Image5", response.data.image5);
      localStorage.setItem("Image6", response.data.image6);

      if (response.status === 200) {
        navigateToGenetatedAvatar();
      }
    } catch (error) {
      console.log("Error", error);
      notifyFailure(error.response.data.message);
      setTimeout(() => {
        navigateToClickSelfie();
      }, 2000);
    }
  };

  useEffect(() => {
    SendData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="event-logo-container">
        <img className="event-logo" src={eventLogo} alt="logo" />
      </div>
      <img src={back} onClick={navigateBack} alt="back" className="back" />
      <img src={home} onClick={navigateToHome} alt="home" className="home" />

      <p className="gender-text">Generating your snap</p>

      <div className="main-camera-container">
        <div className="center-camera-container">
          <img
            src={localStorage.getItem("CapturedImage")}
            alt="capturedImage"
            className="webcam-preview"
          />
          <img src={scanning} alt="scanning" className="scanning-img" />
        </div>
      </div>
      <div className="choose-gender-description-container">
        <p className="choose-gender-description">
          Hang tight, your futuristic AI- generated image is being crafted
        </p>
      </div>
    </>
  );
}
