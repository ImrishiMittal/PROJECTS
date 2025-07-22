import styles from './Skills.module.css'
function WebLang(){
    return(
        <>
        <h4 className={styles.h4}>WEB LANGUGES</h4>
        <div className={styles.cards}>
            <div className={styles.skillsLogo}>
                <img src="./image/HTML.png" alt="" />
                <div>
                    <p className={styles.para}>HTML</p>
                </div>
            </div>
            <div className={styles.skillsLogo}>
                <img src="./image/CSS.jpg" alt="" />
                <div>
                    <p className={styles.para}>CSS</p>
                </div>
            </div>
            <div className={styles.skillsLogo}>
                <img src="./image/JS.png" alt="" />
                <div>
                    <p className={styles.para}>JAVA-SCRIPT</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default WebLang;