import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function DataBase() {
  return (
    <>
      <h4 className={styles.h4}>DATABASES</h4>

      {/* Desktop View */}
      <div className={styles.desktopCards}>
        <div className={styles.skillsLogo}>
          <img src="./image/SQL.png" alt="SQL" className={styles.carouselImg} />
          <p className={styles.para}>SQL</p>
        </div>
      </div>

      {/* Mobile View */}
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
            <img src="./image/SQL.png" alt="SQL" className={styles.carouselImg} />
            <p className={styles.para}>SQL</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DataBase;
