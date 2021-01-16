import React from "react";
import styles from "./Cover.module.scss";
import cover from "../../Assets/Images/night.jpg";
import cover1 from "../../Assets/Images/social.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
// import Navbar from "../Navbar/Navbar";

// -------------------- //

function Cover() {
  return (
    <>
      <Swiper
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide className={styles.cover}>
          <div>
            <img src={cover} alt="cover" className={styles.image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cover}>
            <img src={cover1} alt="cover" className={styles.image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cover}>
            <img src={cover} alt="cover" className={styles.image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cover}>
            <img src={cover1} alt="cover" className={styles.image} />
          </div>
        </SwiperSlide>
        ...
      </Swiper>

      {/* <div className={styles.cover}>
        <img src={cover} alt="cover" className={styles.image} />
        <div className={styles.container}>
          <Navbar />
          <div className={styles.info}>
            <div className={styles.title}>Kpop News</div>
            <div className={styles.subtitle}>subtitle</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Cover;
