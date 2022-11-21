/** @format */
import React from "react";
import { DonarProfile } from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import { DonarSignIn } from "./components/DonarSignIn";
import { DonarSignUp } from "./components/DonarSignUp";
import { HospitalSignIn } from "./components/HospitalSignIn"
import { HospitalSignUp } from "./components/HospitalSignUp"
import { Home } from "./pages/Home";
import { Navigation } from "./components/navigation";
import { DonarList } from "./components/donar";
import { SeekerList } from "./components/seeker";
import { HospitalData } from "./pages/HospitalData";
import { LogoutHospital } from "./components/LogoutHospital";
import {LogoutDonar} from "./components/LogoutDonar";
import { SeekerSignUp } from "./components/SeekerSignUp";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="DonarSignIn" element={<DonarSignIn />} />
          <Route path="DonarSignUp" element={<DonarSignUp />} />
          <Route path="SeekerSignUp" element={<SeekerSignUp />} />
          <Route path="LogoutHospital" element={<LogoutHospital/>}/>
          <Route path="LogoutDonar" element={<LogoutDonar/>}/>
          <Route path="DonarList" element={<DonarList />} />
          <Route path="DonarProfile" element={<DonarProfile />} />
          <Route path="SeekerList" element={<SeekerList />} />
          <Route path="HospitalSignIn" element={<HospitalSignIn />} />
          <Route path="HospitalSignUp" element={<HospitalSignUp />} />
          <Route path="/hospitalData" element={<HospitalData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
