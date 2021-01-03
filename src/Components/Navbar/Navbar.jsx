import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../Assets/Images/logo.svg";

// -------------------- //

function Navbar() {
  return (
    <>
      <div className={styles.grid}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.type}>
          <div>today</div>
          <div>news</div>
          <div>radio</div>
          <div>tv</div>
        </div>
        <div className={styles.lang}>
          <div>kr</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
