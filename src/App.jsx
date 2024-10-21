import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import Home from "./Pages/Home";
import ClickSelfie from "./Pages/ClickSelfie";
import "./App.css";
import ChooseGender from "./Pages/ChooseGender";
import Registration from "./Pages/Registration";
import SelfieScanning from "./Pages/SelfieScanning";
import GeneratedAvatar from "./Pages/GeneratedAvatar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/click-selfie" element={<ClickSelfie />} />
        {/* <Route path="/selfie-scanning" element={<SelfieScanning />} /> */}
        <Route path="/choose-gender" element={<ChooseGender />} />
        <Route path="/generated-avatar" element={<GeneratedAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
