import React from "react";
import styles from "./Cover.module.scss";
import cover from "../../Assets/Images/social.jpg";
// import Navbar from "../Navbar/Navbar";

// -------------------- //

function Cover() {
  return (
    <>
      <div className={styles.cover}>
        <img src={cover} alt="cover" className={styles.image} />
        <div className={styles.container}>
          {/* <Navbar /> */}
          <div className={styles.info}>
            <div className={styles.title}>Kpop News</div>
            <div className={styles.subtitle}>subtitle</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
