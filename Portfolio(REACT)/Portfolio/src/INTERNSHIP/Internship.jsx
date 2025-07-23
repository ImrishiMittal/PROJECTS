import styles from "./Internship.module.css"
function Internship(){
    return(
        <>
        <h2 className={styles.h2}>INTRNSHIPS EXPERIENCE</h2>
        <div className={styles.Intenships}>
            <div className={styles.Intenships_Comp}>
                <h4></h4>
                <img className={styles.Inimage} src="./image/INTERNSHIP_GAO.png" alt="" />
                <details>
                    <p>I initially joined as an intern and was soon promoted to Assistant Squad Leader, which was an incredible opportunity to grow and learn. During my time at GAOTek Inc. , I had the chance to:</p>
                    <ol>
                        <li>Design and develop multiple webpages, contributing to the company's digital presence.</li>
                        <li>Collaborate virtually with experienced professionals, learning from their expertise and gaining valuable insights.</li>
                        <li>Guide and mentor new interns, helping them navigate their roles and responsibilities effectively.</li>
                        <li>Gain foundational knowledge in digital marketing, broadening my skill set and understanding of the field.</li>
                    </ol>
                </details>
                <a href="./GAO TEK/offer letter GAO TECH.pdf" download>OFFER LETTER</a>
                <a href="./GAO TEK/Web Devlopment.pdf" download>WEB DEVELOPER</a>
                <a href="./GAO TEK/Digital Marketing.pdf" download>DIGITAL MARKETING</a>
                <a href="./GAO TEK/Completion.pdf" download>COMPLETION</a>
            </div>
            <div className={styles.Intenships_Comp}>
                <h4></h4>
                <img className={styles.Inimage} src="./image/INTERNSHIP_GLORA.jpg" alt="" />
                <details>
                    <p>During this incredible journey, I had the opportunity to work on various projects that enhanced my skills in HTML, CSS, JavaScript, and Bootstrap. From building responsive web pages to implementing dynamic features, each project challenged me to learn and grow as a developer.</p>
                </details>
                <a href="./offer letter GAO TECH.pdf" download>OFFER LETTER</a>
                <a id="Project" href="./GLORA VITA/Gloria Vita.pdf" download>COMPLETION</a>
            </div>
        </div>
        </>
    )
}
export default Internship