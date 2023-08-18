import { memo } from "react";
import styles from "./Header.module.css";
const Header = memo(() => {
  return (
    <header className={styles.navbar2Button}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.leftChild} alt="" src="/ellipse-6@2x.png" />
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.links}>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Home</div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Program</div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Pricing</div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Community</div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.links1}>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Home</div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Program</div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Pricing</div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navItem1}>Community</div>
            </div>
          </div>
          <div className={styles.navItemParent}>
            <div className={styles.navItem16}>
              <div className={styles.navItem1}>Login</div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>Register</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
