import styles from "./Skills.module.css";
function DataBase() {
  return (
    <>
      <h4 className={styles.h4}>DATABASES</h4>
      <div className={`${styles.cards} ${styles.databaseImg}`}>
        <div className={styles.skillsLogo}>
          <img src="./image/SQL.png" alt="SQL" />
          <p className={styles.para}>SQL</p>
        </div>
      </div>
    </>
  );
}
export default DataBase;
