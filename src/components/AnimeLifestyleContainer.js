import { memo } from "react";
import styles from "./AnimeLifestyleContainer.module.css";
const AnimeLifestyleContainer = memo(() => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.textbutton}>
            <div className={styles.text}>
              <b className={styles.chooseYourOwn}>
                Choose Your Own Lifestyle with Anime
              </b>
              <div className={styles.motivateUsersWith}>
                Motivate users with benefits and positive reinforcement, and
                offer modifications and progress tracking.
              </div>
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <div className={styles.button1}>Start Watching</div>
              </div>
              <div className={styles.watchButton}>
                <div className={styles.search}>
                  <img
                    className={styles.biplayFillIcon}
                    alt=""
                    src="/biplayfill.svg"
                  />
                </div>
                <div className={styles.watchDemo}>Watch Demo</div>
              </div>
            </div>
          </div>
          <div className={styles.trusted}>
            <div className={styles.text1}>
              <div className={styles.trustedBy}>Trusted By</div>
            </div>
            <div className={styles.logo}>
              <img className={styles.g3035Icon} alt="" src="/g3035.svg" />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <img
                className={styles.logoNike1Icon}
                alt=""
                src="/logo-nike-1.svg"
              />
              <img
                className={styles.diadora1Icon}
                alt=""
                src="/diadora-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.animeWrapper}>
            <div className={styles.anime}>Anime</div>
          </div>
          <div className={styles.imageSide}>
            <img
              className={styles.pngwing2Icon}
              alt=""
              src="/pngwing-2@2x.png"
            />
            <img
              className={styles.pngwing3Icon}
              alt=""
              src="/pngwing-3@2x.png"
            />
          </div>
          <img className={styles.pngwing5Icon} alt="" src="/pngwing-5@2x.png" />
        </div>
        <div className={styles.right} />
        <div className={styles.textParent}>
          <div className={styles.textCount}>
            <div className={styles.textCount}>
              <div className={styles.test}>
                <img
                  className={styles.testChild}
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <img
                  className={styles.testChild}
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <img
                  className={styles.testChild}
                  alt=""
                  src="/ellipse-3@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.kSatisfiedCustomer}>
            10K+ Satisfied Customer
          </div>
        </div>
      </div>
    </div>
  );
});

export default AnimeLifestyleContainer;
