import styles from './App.module.css'; 
function Buttons() {
    return (
        <div className={styles.buttonContainer}>
            <a href="/RESUME.pdf" id = "Resume" download className={`${styles.button} ${styles.resume}`}>RESUME</a>
            <a href="#contact" className={`${styles.button} ${styles.contact}`}>CONTACT ME</a>
        </div>
    );
}

export default Buttons;
