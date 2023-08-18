import { memo } from "react";
import styles from "./Footer.module.css";
const Footer = memo(() => {
  return (
    <div className={styles.columnStack}>
      <div className={styles.column}>
        <b className={styles.sitemap}>Sitemap</b>
        <div className={styles.navigationLinks}>
          <div className={styles.navigationItem}>
            <div className={styles.aboutUs}>About Us</div>
          </div>
          <div className={styles.navigationItem}>
            <div className={styles.promos}>Promos</div>
          </div>
          <div className={styles.navigationItem}>
            <div className={styles.promos}>{`News & Blog`}</div>
          </div>
          <div className={styles.navigationItem}>
            <div className={styles.promos}>Help Center</div>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <b className={styles.sitemap}>Support</b>
        <div className={styles.navigationLinks}>
          <div className={styles.navigationItem}>
            <div className={styles.aboutUs}>FAQ</div>
          </div>
          <div className={styles.navigationItem}>
            <div className={styles.promos}>Support Center</div>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <b className={styles.sitemap}>Social Media</b>
        <div className={styles.navigationLinks2}>
          <div className={styles.mdiinstagramParent}>
            <img
              className={styles.mdiinstagramIcon}
              alt=""
              src="/mdiinstagram.svg"
            />
            <img
              className={styles.mdiinstagramIcon}
              alt=""
              src="/mditwitter.svg"
            />
            <img
              className={styles.mdiinstagramIcon}
              alt=""
              src="/rifacebookboxfill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
