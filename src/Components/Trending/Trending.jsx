import React from "react";
import styles from "./Trending.module.scss";
import picture from "../../Assets/Images/social.jpg";

// -------------------- //

function Trending() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.trending}>trending</div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <img src={picture} alt="" className={styles.image} />
          <div className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            autem?
          </div>
          <div className={styles.row}>
            <div className={styles.type}>drama</div>
            <div className={styles.date}>2 hours ago</div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.each}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.col}>
              <div className={styles.title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, autem?
              </div>
              <div className={styles.row}>
                <div className={styles.type}>drama</div>
                <div className={styles.date}>2 hours ago</div>
              </div>
            </div>
          </div>
          <div className={styles.each}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.col}>
              <div className={styles.title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, autem?
              </div>
              <div className={styles.row}>
                <div className={styles.type}>drama</div>
                <div className={styles.date}>2 hours ago</div>
              </div>
            </div>
          </div>
          <div className={styles.each}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.col}>
              <div className={styles.title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, autem?
              </div>
              <div className={styles.row}>
                <div className={styles.type}>drama</div>
                <div className={styles.date}>2 hours ago</div>
              </div>
            </div>
          </div>
          <div className={styles.each}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.col}>
              <div className={styles.title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, autem?
              </div>
              <div className={styles.row}>
                <div className={styles.type}>drama</div>
                <div className={styles.date}>2 hours ago</div>
              </div>
            </div>
          </div>
          <div className={styles.each}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.col}>
              <div className={styles.title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, autem?
              </div>
              <div className={styles.row}>
                <div className={styles.type}>drama</div>
                <div className={styles.date}>2 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
