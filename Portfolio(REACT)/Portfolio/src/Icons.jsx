import styles from "./App.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
function Icons() {
  return (
    <>
      <div className={styles.icons} id = "contact">
        <a
          href="https://www.linkedin.com/in/rishi-mittal-a8a7b7275/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ImrishiMittal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/imrishimittal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://x.com/ImrishiMittal?t=hmehpy5v7cn7TTXbrwbrtg&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="mailto:rishimittalworks@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.figma.com/@rishimittal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
        </a>
      </div>
    </>
  );
}
export default Icons;
