import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import styles from "./App.module.css";
import NavBar from "./NAV/NavBar";
import Intro from "./INTRO/Intro"
import Icons from "./ICONS/Icons";
import Buttons from "./RESUME_CON BUTTONS/Buttons";
import Services from "./SERVICES/Services";
import Skills from "./SKILLS/Skills";
import Internship from "./INTERNSHIP/Internship";
function App() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <Icons/>
    <Buttons/>
    <Services/>
    <Skills/>
    <Internship/>
    </>
  );
}

export default App;
