import styles from './Skills.module.css'
function ProLang(){
    return(
    <>
    <h4 className={styles.h4}>PROGRAMMING LANGUAGES</h4>
        <div className={styles.cards}>
        <div className={styles.skillsLogo}>
            <img src="./image/JAVA.png" alt="" />
            <p className={styles.para}>JAVA</p>
        </div>
        <div className={styles.skillsLogo}>
            <img src="./image/PYTHON.png" alt="" />
            <p className={styles.para}>PYTHON</p>
        </div>
        </div>
    </>
    )
}
export default ProLang