import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Lib_Fam() {
  return (
    <>
      <h4 className={styles.h4}>LIBRARIES AND FRAMEWORKS</h4>
      <div className={styles.desktopCards}>
        <div className={styles.skillsLogo}>
          <img src="./image/REACT.png" alt="React" className={styles.carouselImg} />
          <p className={styles.para}>REACT</p>
        </div>
        <div className={styles.skillsLogo}>
          <img src="./image/TAILWIND.png" alt="Tailwind CSS" className={styles.carouselImg} />
          <p className={styles.para}>TAILWIND CSS</p>
        </div>
        <div className={styles.skillsLogo}>
          <img src="./image/BOOTSTRAP.png" alt="Bootstrap" className={styles.carouselImg} />
          <p className={styles.para}>BOOTSTRAP</p>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop
        className={styles.mobileSwiper}
      >
        <SwiperSlide>
          <div className={styles.skillsLogo}>
            <img src="./image/REACT.png" alt="React" className={styles.carouselImg} />
            <p className={styles.para}>REACT</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.skillsLogo}>
            <img src="./image/TAILWIND.png" alt="Tailwind CSS" className={styles.carouselImg} />
            <p className={styles.para}>TAILWIND CSS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.skillsLogo}>
            <img src="./image/BOOTSTRAP.png" alt="Bootstrap" className={styles.carouselImg} />
            <p className={styles.para}>BOOTSTRAP</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Lib_Fam;
