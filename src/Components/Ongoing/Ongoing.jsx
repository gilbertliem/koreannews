import React from "react";
import styles from "./Ongoing.module.scss";

// -------------------- //

function Ongoing() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div>13.00</div>
          <div className={styles.line}></div>
          <div className={styles.title}>after school club</div>
        </div>
        <div className={styles.seperation}></div>
        <div className={styles.row}>
          <div>14.00</div>
          <div className={styles.line}></div>
          <div className={styles.title}>after school club</div>
        </div>
        <div className={styles.seperation}></div>
        <div className={styles.row}>
          <div>15.00</div>
          <div className={styles.line}></div>
          <div className={styles.title}>after school club</div>
        </div>
      </div>
    </>
  );
}

export default Ongoing;
