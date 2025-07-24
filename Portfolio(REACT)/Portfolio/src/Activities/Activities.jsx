import styles from "./Activities.module.css"
function Activities(){
    return(
        <>
        <h2 className={styles.h2}>CO-CURRICULAR ACTIVITIES</h2>
<div className={styles.activities}>
  <div className={styles.card}>
    <h3 className={styles.h3}>📚 Reading Books</h3>
    <p>Enjoy reading self-help and motivational books during free time to gain insights and develop mindset.</p>
  </div>

  <div className={styles.card}>
    <h3 className={styles.h3}>💻 Coding</h3>
    <p>Passionate about problem-solving through code; participate in online contests and practice DSA regularly.</p>
  </div>

  <div className={styles.card}>
    <h3 className={styles.h3}>🎨 Art & Designing</h3>
    <p>Enjoy sketching and designing UIs; often explore creative tools like Figma and Canva.</p>
  </div>

  <div className={styles.card}>
    <h3 className={styles.h3}>🏏 Cricket</h3>
    <p>Cricket enthusiast; actively play and follow cricket matches to stay refreshed and competitive.</p>
  </div>
</div>

        </>
    )
}
export default Activities