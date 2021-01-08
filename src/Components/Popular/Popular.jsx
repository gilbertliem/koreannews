import React from "react";
import styles from "./Popular.module.scss";

// -------------------- //

function Popular() {
  return (
    <>
      <div className={styles.popular}>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <div>popular</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.subhead}>music {">>"}</div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.subhead}>movie {">>"}</div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.subhead}>drama {">>"}</div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.subhead}>event {">>"}</div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
