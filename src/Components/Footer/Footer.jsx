import React from "react";
import styles from "./Footer.module.scss";

// -------------------- //

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div>About Us</div>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Copyright Policy</div>
          <div>Advertisement</div>
          <div>Newsletter</div>
        </div>
        <div className={styles.copyright}>
          Copyright © 2020. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
