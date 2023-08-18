import { memo } from "react";
import IsekaiCard from "./IsekaiCard";
import styles from "./ContainerCard.module.css";
const ContainerCard = memo(() => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          <div className={styles.mediaObjects}>
            <div className={styles.mediaContainer}>
              <div className={styles.object}>
                <div className={styles.media} />
                <div className={styles.text}>
                  <div className={styles.loremIpsum}>Lorem Ipsum</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    venenatis, nunc a pretium viverra.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.cardioStrengceParent}>
                <div className={styles.cardioStrengce}>Cardio Strengce</div>
                <div className={styles.whoDoesntLike}>
                  Who doesn’t like to romance. Where everything is faire and you
                  are unable to tell wher win or loose.
                </div>
              </div>
            </div>
          </div>
          <IsekaiCard
            dimension="/group-4.svg"
            genreDescription="Isekai"
            storyDescription="Transported into Another world Facing Problems on daily basis."
          />
          <IsekaiCard
            dimension="/group-3.svg"
            genreDescription="Sci-Fi"
            storyDescription="A world where Fiction of Technology is hard to to see and becomes even harder to follow."
            propBackgroundColor="#0d0d0d"
            propWidth="27.32px"
            propColor="rgba(255, 255, 255, 0.5)"
          />
          <div className={styles.mediaObjects1}>
            <img
              className={styles.mediaObjectsChild}
              alt=""
              src="/group-6.svg"
            />
            <div className={styles.text2}>
              <div className={styles.adventureParent}>
                <div className={styles.loremIpsum}>Adventure</div>
                <div className={styles.aLongRunning}>
                  A long running series with full of twists and turns.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mediaObjects2}>
            <div className={styles.mediaContainer1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.text2}>
              <div className={styles.adventureParent}>
                <div className={styles.loremIpsum}>Action</div>
                <div className={styles.aShortYetContainer}>
                  <p className={styles.aShortYet}>A short yet beautiful</p>
                  <p className={styles.aShortYet}>{`which connects  `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContainerCard;
