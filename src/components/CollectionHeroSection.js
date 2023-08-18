import { memo } from "react";
import styles from "./CollectionHeroSection.module.css";
const CollectionHeroSection = memo(() => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <div className={styles.image}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-1@2x.png"
              />
              <img
                className={styles.frameItem}
                alt=""
                src="/rectangle-2@2x.png"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-4@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.textSide}>
          <div className={styles.content}>
            <b className={styles.transformYourCollection}>
              Transform your Collection to perfect Collection with our Anime
              plan.
            </b>
            <div className={styles.checklist}>
              <div className={styles.checklist01}>
                <img
                  className={styles.checkListIcon}
                  alt=""
                  src="/check-list.svg"
                />
                <div className={styles.peekFiction}>Peek Fiction</div>
              </div>
              <div className={styles.checklist01}>
                <img
                  className={styles.checkListIcon}
                  alt=""
                  src="/check-list.svg"
                />
                <div className={styles.peekFiction}>Daily Dose of Fights.</div>
              </div>
              <div className={styles.checklist01}>
                <img
                  className={styles.checkListIcon}
                  alt=""
                  src="/check-list.svg"
                />
                <div className={styles.peekFiction}>
                  Escape this Regular world.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <div className={styles.button1}>Join now</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.button1}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CollectionHeroSection;
