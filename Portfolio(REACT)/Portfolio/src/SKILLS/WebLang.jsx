import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Skills.module.css";

function WebLang() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skills = [
    { name: "HTML", img: "./image/HTML.png" },
    { name: "CSS", img: "./image/CSS.jpg" },
    { name: "JAVA-SCRIPT", img: "./image/JS.png" },
  ];

  return (
    <>
      <h4 className={styles.h4}>WEB LANGUAGES</h4>
      {isMobile ? (
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={2}
          slidesPerView={1}
          className={styles.mobileSwiper}
        >
          {skills.map((skill, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.skillsLogo}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className={styles.carouselImg}
                />
                <p className={styles.para}>{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.cards}>
          {skills.map((skill, idx) => (
            <div className={styles.skillsLogo} key={idx}>
              <img src={skill.img} alt={skill.name} />
              <p className={styles.para}>{skill.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default WebLang;
