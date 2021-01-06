import React from "react";
import styles from "./Latest.module.scss";
import picture from "../../Assets/Images/social.jpg";

// -------------------- //

function Latest() {
  return (
    <>
      <div>
        <div className={styles.latest}>
          <div className={styles.head}>latest news</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.cont}>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
            <div className={styles.summary}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              iusto odit aperiam quasi, eos esse expedita sequi at enim eaque.
            </div>
            <div className={styles.source}>www.source.com</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
            <div className={styles.summary}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              iusto odit aperiam quasi, eos esse expedita sequi at enim eaque.
            </div>
            <div className={styles.source}>www.source.com</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
            <div className={styles.summary}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              iusto odit aperiam quasi, eos esse expedita sequi at enim eaque.
            </div>
            <div className={styles.source}>www.source.com</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
            <div className={styles.summary}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              iusto odit aperiam quasi, eos esse expedita sequi at enim eaque.
            </div>
            <div className={styles.source}>www.source.com</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
            <div className={styles.summary}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              iusto odit aperiam quasi, eos esse expedita sequi at enim eaque.
            </div>
            <div className={styles.source}>www.source.com</div>
          </div>
          <div className={styles.card}>
            <img src={picture} alt="" className={styles.image} />
            <div className={styles.title}>Lorem ipsum dolor sit amet</div>
            <div className={styles.summary}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              iusto odit aperiam quasi, eos esse expedita sequi at enim eaque.
            </div>
            <div className={styles.source}>www.source.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Latest;
