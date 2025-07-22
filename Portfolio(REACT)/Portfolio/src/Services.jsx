import styles from "./Services.module.css";
import { RiCodeBoxFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
function Services() {
  return (
    <>
      <div>
        <h2>SERIVICES</h2>
        <div className={styles.cards}>
          <div>
            <RiComputerFill />
            <h4>WEB DEVELOPMENT</h4>
            <p>Building responsive, SEO-optimized, and high-performance websites using modern technologies.</p>
          </div>
          <div className={styles.frontend}>
            <RiCodeBoxFill />
                <h4>FRONT-END </h4>
            <p>
              Developing fast and interactive user interfaces using HTML, CSS,
              JavaScript, and React.
            </p>
          </div>
          <div>
          <TbBrandMysql />
          <h4>Structued Query Language</h4>
          <p>I offer SQL expertise for database management, creating and optimizing queries to ensure efficient data handling in web <span id="skills">applications</span>.</p>
          </div>
          <div>
          <FaGithub />
          <h4>GITHUB</h4>
          <p>Experienced in version control, repository management, and collaborative development workflows using Git and GitHub.</p>
          </div>
          <div>
          <PiFigmaLogoBold />
          <p>I offer Figma expertise for designing user interfaces, creating interactive prototypes, and collaborating efficiently to deliver visually appealing designs.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
