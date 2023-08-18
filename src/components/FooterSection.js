import { memo } from "react";
import styles from "./FooterSection.module.css";
const FooterSection = memo(() => {
  return (
    <div className={styles.copyright}>
      <div className={styles.copyright1}>
        <div className={styles.icbaselineCopyrightParent}>
          <img
            className={styles.icbaselineCopyrightIcon}
            alt=""
            src="/icbaselinecopyright.svg"
          />
          <div className={styles.animeCenter}>2023 Anime Center</div>
        </div>
        <div className={styles.navigationItemParent}>
          <div className={styles.navigationItem}>
            <div className={styles.termOfUse}>Term of Use</div>
          </div>
          <div className={styles.navigationItem}>
            <div className={styles.termOfUse}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FooterSection;
