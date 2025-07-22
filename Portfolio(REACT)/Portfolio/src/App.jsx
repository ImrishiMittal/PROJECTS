import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import styles from "./App.module.css";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Icons from "./Icons";
import Buttons from "./Buttons";
import Services from "./Services";

function App() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <Icons/>
    <Buttons/>
    <Services/>
    </>
  );
}

export default App;
