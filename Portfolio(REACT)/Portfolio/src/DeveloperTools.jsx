import styles from './Skills.module.css'
function DeveloperTools(){
    return(
        <>
        <h4 className={styles.h4}>DEVELOPER TOOLS</h4>
        <div className={styles.cards}>
        <div className={styles.skillsLogo}>
            <img src="./image/git and github.webp" alt="" />
            <p className={styles.para}>GIT AND GITHUB</p>
        </div>
        <div className={styles.skillsLogo}>
            <img src="./image/vsc.png" alt="" />
            <p className={styles.para}>VS CODE</p>
        </div>
        <div className={styles.skillsLogo}>
        <img src="./image/figma.png" alt="" />
            <p className={styles.para}>FIGMA</p>
        </div>
        </div>
        </>
    )
}
export default DeveloperTools