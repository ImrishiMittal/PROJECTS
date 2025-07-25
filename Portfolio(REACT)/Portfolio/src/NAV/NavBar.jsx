import styles from "../App.module.css";
import { FaBars } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) document.body.classList.add("dark");
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <a href="" className={styles.name}>
          <span className={styles.FL}>R</span>ishi{" "}
          <span className={styles.FL}>M</span>ittal
        </a>

        <div className={styles.icons}>
          <span className={styles.themeToggle} onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </span>

          <span className={styles.bars} onClick={toggleMenu}>
            <FaBars />
          </span>
        </div>

        <div
          className={`${styles.amenities} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#Resume">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#Project">Project</a>
          <a href="#Contact">Contact</a>
          <a className={styles.Hire} href="">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
