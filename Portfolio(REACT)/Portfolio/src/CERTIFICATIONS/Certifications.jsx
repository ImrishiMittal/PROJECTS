import styles from "./Certifications.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import '../global.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

function Certifications() {
  const certifications = [
    {
      title: "Microsoft Learn Student Ambassador",
      issuer: "Microsoft",
      image: "./Certifications/Microsoft Learn Student Amassador.pdf",
    },
    {
      title: "Java",
      issuer: "Infosys",
      image: "./Certifications/JAVA CERTIFICATE.pdf",
    },
    {
      title: "HTML, CSS & JavaScript",
      issuer: "Udemy",
      image: "./Certifications/HTML,CSS AND JAVASCRIPT.pdf",
    },
    {
      title: "Presentation Skills",
      issuer: "TCS",
      image: "./Certifications/PRESENTAION SKILLS TCS.pdf",
    },
    {
      title: "React",
      issuer: "Meta",
      image: "./Certifications/REACT META.pdf",
    },
    {
      title: "Software Engineering",
      issuer: "IBM",
      image: "./Certifications/SOFTWARE ENGINEERING IBM.pdf",
    },
    {
      title: "SQL",
      issuer: "Simplilearn",
      image: "./Certifications/SQL.pdf",
    },
  ];

  return (
    <>
      <h2 className={styles.h2}>CERTIFICATIONS</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.certificateSlider}
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <a href={cert.image} download className={styles.downloadBtn}>
              Download Certificate
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Certifications;
