import styles from "./Education.module.css";
function Education() {
  return (
    <>
      <h2 className={styles.h2}>EDUCATION</h2>
      <div className={styles.eduDetails}>
        <div className={styles.scholl}>
          <div className={styles.scdetails}>
            <h4 className={styles.h4}>CLASS 10</h4>
            <div>
              <h5>
                <b>SCHOOL NAME - <p className={styles.ans}> D.A.V PUBLIC SCHOOL</p></b>
              </h5>
              <h5>
                <b>YEAR OF PASSING - <p className={styles.ans}>2020</p></b>
              </h5>
              <h5>
                <b>PERCENTAGE - <p className={styles.ans}>80</p></b>
              </h5>
            </div>
          </div>

          <div className={styles.scdetails}>
            <h4 className={styles.h4}>CLASS 12</h4>
            <div>
              <h5>
                <b>SCHOOL NAME - <p className={styles.ans}>M.G.M HIGHER SENIOR SECONDARY SCHOOL</p></b>
              </h5>
              <h5>
                <b>YEAR OF PASSING - <p className={styles.ans}>2022</p></b>
              </h5>
              <h5>
                <b>PERCENTAGE - <p className={styles.ans}>70</p></b>
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.college}>
          <h4 className={styles.h4}>BACHELOR'S IN INFORMATION TECHNOLOGY</h4>
          <div className={styles.clgdetails}>
            <h5>
              <b>COLLEGE NAME - <p className={styles.ans}>MANIPAL UNIVERSITY JAIPUR</p></b>
            </h5>
            <h5>
              <b>COURSE NAME - <p className={styles.ans}>BTECH</p></b>
            </h5>
            <h5>
              <b>BRANCH NAME - <p className={styles.ans}>INFORMATION TECHNOLOGY</p></b>
            </h5>
            <h5>
              <b>ADMISSION YEAR - <p className={styles.ans}>2022</p></b>
            </h5>
            <h5>
              <b>EXPECTED COMPLETION - <p className={styles.ans}>2026</p></b>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
