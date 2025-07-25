import styles from "../App.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.navbar}>
          <a href="" className={styles.name}>
            <span className={styles.FL}>R</span>ishi{" "}
            <span className={styles.FL}>M</span>ittal
          </a>

          <span className={styles.bars} onClick={toggleMenu}><FaBars /></span>

          <div
            className={`${styles.amenities} ${
              isMenuOpen ? styles.showMenu : ""
            }`}
          >
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#Resume">Resume</a>
            <a href="#skills">Skills</a>
            <a href="#Project">Project</a>
            <a href="#Contact">Contact</a>
            <a className={styles.Hire} href="">Hire Me</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
