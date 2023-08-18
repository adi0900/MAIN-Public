import { memo } from "react";
import styles from "./SubscribeFormContainer.module.css";
const SubscribeFormContainer = memo(() => {
  return (
    <div className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.div} />
        <div className={styles.textSideParent}>
          <div className={styles.textSide}>
            <b className={styles.subscribeOurAnime}>
              Subscribe our Anime Updates
            </b>
            <div className={styles.clearlyCommunicateThe}>
              Clearly communicate the benefits of subscribing, such as exclusive
              content and breaking news.
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.enterYourEmail}>
              Enter your email address
            </div>
            <div className={styles.subscribe}>
              <div className={styles.subscribeChild} />
              <div className={styles.subscribe1}>Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SubscribeFormContainer;
