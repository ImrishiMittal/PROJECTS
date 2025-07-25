import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ProLang() {
    const languages = [
        { img: "./image/JAVA.png", name: "JAVA" },
        { img: "./image/PYTHON.png", name: "PYTHON" }
    ];

    return (
        <>
            <h4 className={styles.h4}>PROGRAMMING LANGUAGES</h4>
            <div className={`${styles.cards} ${styles.desktopCards}`}>
                {languages.map((lang, index) => (
                    <div className={styles.skillsLogo} key={index}>
                        <img src={lang.img} alt={lang.name} />
                        <p className={styles.para}>{lang.name}</p>
                    </div>
                ))}
            </div>
            <div className={styles.mobileSwiper}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {languages.map((lang, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.skillsLogo}>
                                <img src={lang.img} alt={lang.name} className={styles.carouselImg} />
                                <p className={styles.para}>{lang.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default ProLang;
