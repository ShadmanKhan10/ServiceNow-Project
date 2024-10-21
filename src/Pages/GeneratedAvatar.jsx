import React, { useRef, useState, useEffect } from "react";
import eventLogo from "../assets/eventLogo.png";
import home from "../assets/home.png";
import back from "../assets/back.png";
import { isMobile } from "react-device-detect";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

export default function GeneratedAvatar() {
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("Image1")
  );

  // Create refs for all avatars
  const avatarRefs = useRef([]);

  useEffect(() => {
    // Apply the white border to the first avatar by default
    if (avatarRefs.current[0]) {
      avatarRefs.current[0].classList.add("selected");
    }
  }, []);

  const handleChangeSelectedImage = (image, index) => {
    setSelectedImage(image);

    // Remove the "selected" class from all avatars
    avatarRefs.current.forEach((ref) => ref.classList.remove("selected"));

    // Add the "selected" class to the clicked avatar
    if (avatarRefs.current[index]) {
      avatarRefs.current[index].classList.add("selected");
    }
  };

  const handleDownloadSingle = async () => {
    const imageUrl = `${BASE_URL}/AIPhotoOutputImages/${selectedImage}`;
    const response = await fetch(imageUrl, { mode: "cors", cache: "no-cache" });
    const blob = await response.blob();
    saveAs(blob, `${localStorage.getItem("Name")}.png`);
  };

  const navigateToHome = () => navigate("/");
  const navigateBack = () => navigate(-1);

  return (
    <>
      <div className="event-logo-container">
        <img className="event-logo" src={eventLogo} alt="logo" />
      </div>
      <img src={back} onClick={navigateBack} alt="back" className="back" />
      <img src={home} onClick={navigateToHome} alt="home" className="home" />
      <p className="home-text">
        Your{" "}
        <span style={{ fontWeight: "bold", color: "white" }}>AI AVATAR</span>
      </p>
      <div className="output-avatar-container">
        <div className="big-avatar-container">
          <img
            src={`${BASE_URL}/AIPhotoOutputImages/${selectedImage}`}
            alt="generated-avatar"
            className="generated-avatar-big-image"
          />
        </div>
        <div className="list-avatar-container">
          {!isMobile && (
            <>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[0] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image1"), 0)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image1"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
                <img
                  ref={(el) => (avatarRefs.current[1] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image2"), 1)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image2"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[2] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image3"), 2)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image3"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
                <img
                  ref={(el) => (avatarRefs.current[3] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image4"), 3)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image4"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[4] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image5"), 4)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image5"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
                <img
                  ref={(el) => (avatarRefs.current[5] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image6"), 5)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image6"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
            </>
          )}
          {isMobile && (
            <>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[0] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image1"), 0)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image1"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[1] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image2"), 1)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image2"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[2] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image3"), 2)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image3"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[3] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image4"), 3)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image4"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[4] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image5"), 4)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image5"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
              <div className="avatar-row">
                <img
                  ref={(el) => (avatarRefs.current[5] = el)}
                  onClick={() =>
                    handleChangeSelectedImage(localStorage.getItem("Image6"), 5)
                  }
                  src={`${BASE_URL}/AIPhotoThumbnails/${localStorage.getItem(
                    "Image6"
                  )}`}
                  alt="generated-avatar"
                  className="generated-avatar-circular"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="download-button-container">
        <button onClick={handleDownloadSingle} className="download-btn">
          Download
        </button>
      </div>
    </>
  );
}
