import styles from './Skills.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function DeveloperTools() {
    const tools = [
        { img: "./image/git and github.webp", name: "GIT AND GITHUB" },
        { img: "./image/vsc.png", name: "VS CODE" },
        { img: "./image/figma.png", name: "FIGMA" }
    ];

    return (
        <>
            <h4 className={styles.h4}>DEVELOPER TOOLS</h4>

            {/* Desktop View */}
            <div className={`${styles.cards} ${styles.desktopCards}`}>
                {tools.map((tool, index) => (
                    <div className={styles.skillsLogo} key={index}>
                        <img src={tool.img} alt={tool.name} />
                        <p className={styles.para}>{tool.name}</p>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel View */}
            <div className={styles.mobileSwiper}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {tools.map((tool, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.skillsLogo}>
                                <img src={tool.img} alt={tool.name} className={styles.carouselImg} />
                                <p className={styles.para}>{tool.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default DeveloperTools;
