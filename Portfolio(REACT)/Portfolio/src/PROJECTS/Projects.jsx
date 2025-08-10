import styles from "./Projects.module.css";
function Projects() {
  return (
    <>
      <h2 className={styles.h2}>PROJECTS</h2>
      <div className={styles.Projects}>
        <div className={styles.BharatExpo}>
          <h4 className={styles.h4}>
            BHARAT EXPLORATION – A SMART TOUR GUIDE WEB APP
          </h4>
          <ul>
            <li>
              <h5 className={styles.h5}>Tech Stack: HTML, CSS, JavaScript</h5>
            </li>
          </ul>
          <p>
            Bharat Exploration is a dynamic and responsive front-end web application designed to serve as a comprehensive virtual tour guide for travelers across India. Beyond just listing popular tourist destinations, the platform offers an in-depth cultural experience by integrating detailed information for each state and union territory. This includes sections on culture, traditions, local festivals, languages spoken, transportation options, geographical highlights, and travel essentials, making it a one-stop resource for anyone exploring the diversity of India. The application combines high-quality visuals with an intuitive UI to ensure easy navigation and immersive user engagement.
          </p>
          <div>
            <div className={styles.parahead}>Key Features: </div>
            <p className={styles.paragraph}>
              <ul>
                <li>
                  Clean and intuitive layout for effortless state-wise
                  navigation.
                </li>
                <li>
                  Visually rich design with vibrant images and animations.
                </li>
                <li>Responsive UI optimized for all screen sizes.</li>
                <li>
                  Scalable structure, ideal for future integration with APIs or
                  databases.
                </li>
                <li>
                  Contact form powered by Web3Forms – enables users to send
                  messages without any backend setup.
                </li>
              </ul>
            </p>
            <div className={styles.live}>
              <a href="https://bharatexploration.netlify.app/" target="_blank">
                VISIT
              </a>
              <a href="https://github.com/ImrishiMittal/PROJECTS/tree/main/TOUR%20GUIDE" target="_blank">
                SOURCE CODE
              </a>
            </div>
          </div>
        </div>

        <div className={styles.Todo}>
          <h4 className={styles.h4}>RAECT- TODO APP</h4>
          <ul>
                <li>
                    <h5 className={styles.h5}>Tech Stack: HTML, CSS, BOOTSTARP, REACT, RAECT-ICONS</h5>
                </li>
            </ul>
          <p>A responsive and interactive task manager built with React.js and CSS Modules. Users can add, edit, delete, mark as done/undo, and clear all tasks. Includes dynamic styling, icon-based controls, and smooth hover animations for an engaging experience.</p>
          <div className={styles.parahead}>Key Features: </div>
            <p className={styles.paragraph}>
              <ul>
                <li>Add, edit, delete, and toggle task completion</li>
                <li>Clear all tasks with one click (visible only when tasks exist)</li>
                <li>Visual distinction for completed tasks with strikethrough</li>
                <li>Responsive layout with consistent horizontal alignment</li>
                <li>Smooth hover animations and interactive icons</li>
              </ul>
            </p>
        </div>

        <div className={styles.Jalpan}>
            <h4 className={styles.h4}>🥘 JALPAAN – RESTAURANT LANDING PAGE</h4>
            <ul>
                <li>
                    <h5 className={styles.h5}>Tech Stack: HTML, CSS, JavaScript</h5>
                </li>
            </ul>
            <p>Jalpaan is a modern and visually appealing landing page designed for a fictional restaurant. The project showcases a clean UI layout, smooth scroll navigation, and aesthetic design principles, making it ideal for restaurant businesses aiming to build a strong online presence.</p>
            <div className={styles.parahead}>Key Features: </div>
            <p className={styles.paragraph}>
                <ul>
                    <li>🍽️ Elegant hero section with inviting CTA for reservations or menu browsing</li>
                    <li>🧾 Dedicated sections for About Us, Menu, Services, Testimonials, and Contact</li>
                    <li>📱 Responsive design ensures seamless experience across devices</li>
                    <li>🎨 Attractive visual styling with thoughtful color choices and typography</li>
                </ul>
            </p>
            <div className={styles.live}>
            <a href="https://jalpaan.netlify.app/" target="_blank">
                VISIT
              </a>
            </div>
        </div>

        <div className={styles.TSD}>
            <h4 className={styles.h4}>TRAFFIC SIGNS DETECTIION USING YOLOv8</h4>
            <ul>
                <li>
                    <h5 className={styles.h5}>Tech Stack / Tools: Python, YOLOv8, OpenCV, Ultralytics, Google Colab, Kaggle</h5>
                </li>
                <b>Domain: Machine Learning, Computer Vision</b>
                <p>This project was developed as part of a college Machine Learning course, in collaboration with a teammate and under the guidance of our faculty. The objective was to build a real-time system capable of detecting and classifying various traffic signs using the YOLOv8 (You Only Look Once) object detection framework.</p>
                <div className={styles.parahead}>Key Features: </div>
                <p className={styles.paragraph}>
                    <ul>
                        <li>🧠 Used YOLOv8 model architecture for high-speed and accurate object detection.</li>
                        <li>🖼️ Processed and trained on a labeled traffic sign dataset using image annotation and data augmentation.</li>
                        <li>🧪 Evaluated model performance using precision, recall, and mAP metrics.</li>
                        <li>💻 Integrated OpenCV for real-time inference, making the system deployable on live video feeds.</li>
                        <li>🤝 Collaborative development in a team setting with strong faculty mentorship.</li>
                    </ul>
                </p>
            </ul>
            <div className={styles.live}><a href="https://www.kaggle.com/code/jashansood/traffic-signs-detection-using-yolov8/edit" target="_blank">
                SOURCE CODE
              </a></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
