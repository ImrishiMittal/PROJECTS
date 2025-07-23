import styles from './Skills.module.css'
function Lib_Fam(){
return(
    <>
    <h4 className={styles.h4}>
        LIBRARIES AND FRAMEWORKS
    </h4>
    <div className={styles.cards}>
        <div className={styles.skillsLogo}>
            <img src="./image/REACT.png" alt="" />
            <div>
            <p className={styles.para}>REACT</p>
            </div>
        </div>
        <div className={styles.skillsLogo}>
            <img src="./image/TAILWIND.png" alt="" />
            <div>
                <p className={styles.para}>TAILWIND CSS</p>
            </div>
        </div>
        <div className={styles.skillsLogo}>
            <img src="./image/BOOTSTRAP.png" alt="" />
            <div>
                <p className={styles.para}>BOOTSTRAP</p>
            </div>
        </div>
    </div>
    </>
)
}
export default Lib_Fam