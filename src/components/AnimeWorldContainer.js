import { memo } from "react";
import styles from "./AnimeWorldContainer.module.css";
const AnimeWorldContainer = memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.content}>
          <div className={styles.exploreTheAnimeWorldParent}>
            <b className={styles.exploreTheAnime}>Explore The Anime World</b>
            <div className={styles.arrow}>
              <div className={styles.remixIconslinesystemarrowWrapper}>
                <img
                  className={styles.remixIconslinesystemarrow}
                  alt=""
                  src="/remixiconslinesystemarrowleftline1.svg"
                />
              </div>
              <div className={styles.remixIconslinesystemarrowContainer}>
                <img
                  className={styles.remixIconslinesystemarrow}
                  alt=""
                  src="/remixiconslinesystemarrowleftline2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AnimeWorldContainer;
