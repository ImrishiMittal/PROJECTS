import styles from "./App.module.css";
function Intro() {
  return (
    <>
      <div className={styles.Intro}>
        <div className={styles.Description}>
          <div className={styles.hi}>HELLO I'M</div>
          <div className={styles.Introname}>
            <span className={styles.FName}>Rishi</span>{" "}
            <span className={styles.LName}>Mittal</span>
          </div>
          <div className={styles.domain}>Front-End Developer</div>
          <br />
          <div className={styles.about} id ="about">
            Hi, I’m Rishi Mittal — a passionate Front-End Developer focused on
            building clean, responsive, and user-friendly web interfaces. I have
            hands-on experience with HTML, CSS, JavaScript, Bootstrap, and
            React. With a strong foundation in core programming and growing
            expertise in the MERN stack, I enjoy solving real-world problems
            through efficient and scalable code. My problem-solving skills are
            strengthened through consistent DSA practice in Java and
            project-based learning. I'm also exploring the world of Machine
            Learning to expand my skill set and stay aligned with evolving tech
            trends. Always eager to collaborate, learn, and contribute to
            impactful products.
          </div>
        </div>
        <div className={styles.pfp}>
          <div className={styles.headshot}>
            <img src="./image/picofme.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
