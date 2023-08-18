import { memo, useMemo } from "react";
import styles from "./IsekaiCard.module.css";
const IsekaiCard = memo(
  ({
    dimension,
    genreDescription,
    storyDescription,
    propBackgroundColor,
    propWidth,
    propColor,
  }) => {
    const mediaObjectsStyle = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
      };
    }, [propBackgroundColor]);

    const groupIconStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    const transportedIntoAnotherStyle = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    return (
      <div className={styles.mediaObjects} style={mediaObjectsStyle}>
        <div className={styles.mediaContainer}>
          <img
            className={styles.mediaContainerChild}
            alt=""
            src={dimension}
            style={groupIconStyle}
          />
        </div>
        <div className={styles.text}>
          <div className={styles.isekaiParent}>
            <div className={styles.isekai}>{genreDescription}</div>
            <div
              className={styles.transportedIntoAnother}
              style={transportedIntoAnotherStyle}
            >
              {storyDescription}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default IsekaiCard;
