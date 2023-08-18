import { memo } from "react";
import styles from "./BottomFooter.module.css";
const BottomFooter = memo(() => {
  return (
    <div className={styles.column}>
      <img className={styles.columnChild} alt="" src="/ellipse-6@2x.png" />
      <div className={styles.animeSiteWrapper}>
        <div className={styles.animeSite}>Anime Site</div>
      </div>
      <div className={styles.highlightImpactsOf}>
        Highlight impacts of each fiction world, both physical and mental.
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMedia1} />
        <div className={styles.socialMedia1} />
        <div className={styles.socialMedia1} />
      </div>
    </div>
  );
});

export default BottomFooter;
