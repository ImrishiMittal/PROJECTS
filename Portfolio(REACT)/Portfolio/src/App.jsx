import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import styles from "./App.module.css";
import NavBar from "./NavBar";
import Intro from "./Intro";

function App() {
  console.log("App rendered");
  return (
    <>
    <NavBar/>
    <Intro/>
    </>
  );
}

export default App;
