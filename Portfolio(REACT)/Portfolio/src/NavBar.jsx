import styles from "./App.module.css";
function NavBar() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.navbar}>
          <a href="" className={styles.name}>
            <span className={styles.FL}>R</span>ishi{" "}
            <span className={styles.FL}>M</span>ittal
          </a>
          <div className={styles.amenities}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#Resume">Resume</a>
            <a href="#skills">Skills</a>
            <a href="">Project</a>
            <a href="#contact">Contact</a>
            <a className={styles.Hire} href="">Hire Me</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
