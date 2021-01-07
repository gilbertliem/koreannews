import React from "react";
import styles from "./Performance.module.scss";
import picture from "../../Assets/Images/social.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -------------------- //

function Performance() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    arrows: false,
    cssEase: "linear",
    swipeToSlide: true,
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    // ]
  };
  return (
    <>
      <div className={styles.row}>
        <div className={styles.performance}>
          <div className={styles.line}></div>
          <div>performances</div>
          <div className={styles.line}></div>
        </div>
        <Slider {...settings}>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Performance;
