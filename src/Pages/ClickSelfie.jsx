import React, { useRef, useState } from "react";
import eventLogo from "../assets/eventLogo.png";
import home from "../assets/home.png";
import back from "../assets/back.png";
import capture from "../assets/capture.png";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { isMobile } from "react-device-detect";
import scanning from "../assets/scanning.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import axios from "axios";

export default function ClickSelfie() {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [captured, setCaptured] = useState(false);
  const [capturedImgSrc, setCapturedImgSrc] = useState(null);
  const [scan, setScan] = useState(false);

  const BASE_URL = `${import.meta.env.VITE_BASE_URL}/generate-aiphoto-op`;

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateBack = () => {
    navigate(-1);
  };
  const navigateToGenetatedAvatar = () => {
    navigate("/generated-avatar");
  };
  const navigateToClickSelfie = () => {
    navigate(-1);
  };

  const handleCaptureClick = async () => {
    let imageSrc = null;
    if (isMobile) {
      imageSrc = webcamRef.current.getScreenshot({
        width: 720,
        height: 1280,
      });
    } else {
      imageSrc = webcamRef.current.getScreenshot({
        width: 1280,
        height: 720,
      });
    }
    // const pngImage = await convertToPNG(imageSrc);

    // localStorage.setItem("CapturedImage", imageSrc);
    setCapturedImgSrc(imageSrc);
    setCaptured(true);
  };

  const handleRetake = () => {
    setCaptured(false);
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
        userImage: capturedImgSrc,
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

  const sendRequestToBackEnd = () => {
    setScan(true);
    SendData();
  };

  return (
    <>
      <ToastContainer />
      <div className="event-logo-container">
        <img className="event-logo" src={eventLogo} alt="logo" />
      </div>
      <img src={back} onClick={navigateBack} alt="back" className="back" />
      <img src={home} onClick={navigateToHome} alt="home" className="home" />

      {!captured && !scan && <p className="gender-text">Let's take a photo</p>}

      {captured && !scan && <p className="gender-text">Preview</p>}

      {captured && scan && <p className="gender-text">Generating your snap</p>}

      <div className="main-camera-container">
        <div className="center-camera-container">
          {!captured && (
            <Webcam
              mirrored={true}
              audio={false}
              ref={webcamRef}
              screenshotQuality={1}
              screenshotFormat="image/png"
              className="webcam-preview"
              videoConstraints={{
                facingMode: "user",
                width: 1280,
                height: 720,
              }}
            />
          )}

          {captured && (
            <img
              src={capturedImgSrc}
              alt="capturedImage"
              className="webcam-preview"
            />
          )}
          {captured && scan && (
            <img src={scanning} alt="scanning" className="scanning-img" />
          )}

          {captured && scan && (
            <motion.div
              className="scanner-line"
              initial={{ y: "0px" }} // Start from above the container
              animate={!isMobile ? { y: "28vw" } : { y: "95vw" }} // Move to the bottom of the container
              transition={{
                repeat: Infinity, // Keep looping the animation
                duration: 1, // Control the speed (seconds)
                ease: "linear", // Linear animation for smooth movement
              }}
            />
          )}

          {!captured && (
            <img
              src={capture}
              onClick={handleCaptureClick}
              alt="capture"
              className="capture-btn"
            />
          )}
        </div>
      </div>
      {captured && !scan && (
        <div className="button-container">
          <div className="retake-confirm-container">
            <button className="global-btn retake" onClick={handleRetake}>
              RETAKE
            </button>
            <button
              className="global-btn confirm"
              onClick={sendRequestToBackEnd}
            >
              CONFIRM
            </button>
          </div>
        </div>
      )}
      {captured && scan && (
        <div className="choose-gender-description-container">
          <p className="choose-gender-description">
            Hang tight, your futuristic AI- generated image is being crafted
          </p>
        </div>
      )}
    </>
  );
}
