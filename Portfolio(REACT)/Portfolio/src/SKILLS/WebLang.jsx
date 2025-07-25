import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function WebLang() {
  return (
    <>
      <h4 className={styles.h4}>WEB LANGUAGES</h4>

      {/* Desktop View */}
      <div className={styles.desktopCards}>
        <div className={styles.skillsLogo}>
          <img src="./image/HTML.png" alt="HTML" className={styles.carouselImg} />
          <p className={styles.para}>HTML</p>
        </div>
        <div className={styles.skillsLogo}>
          <img src="./image/CSS.jpg" alt="CSS" className={styles.carouselImg} />
          <p className={styles.para}>CSS</p>
        </div>
        <div className={styles.skillsLogo}>
          <img src="./image/JS.png" alt="JavaScript" className={styles.carouselImg} />
          <p className={styles.para}>JAVASCRIPT</p>
        </div>
      </div>

      {/* Mobile Swiper View */}
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
            <img src="./image/HTML.png" alt="HTML" className={styles.carouselImg} />
            <p className={styles.para}>HTML</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.skillsLogo}>
            <img src="./image/CSS.jpg" alt="CSS" className={styles.carouselImg} />
            <p className={styles.para}>CSS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.skillsLogo}>
            <img src="./image/JS.png" alt="JavaScript" className={styles.carouselImg} />
            <p className={styles.para}>JAVASCRIPT</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default WebLang;
