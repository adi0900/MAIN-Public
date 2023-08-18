import { memo, useMemo } from "react";
import styles from "./PriceCard.module.css";
const PriceCard = memo(
  ({
    basicPackage,
    prop,
    xAnimeServers,
    animeTracking,
    xFreeSupport,
    downloadIn480p,
    propColor,
  }) => {
    const downloadIn480pStyle = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    return (
      <div className={styles.frameParent}>
        <div className={styles.basicPackageParent}>
          <div className={styles.basicPackage}>{basicPackage}</div>
          <div className={styles.parent}>
            <div className={styles.basicPackage}>{prop}</div>
            <div className={styles.perMonthbillAnnualy}>
              per month,bill annualy
            </div>
          </div>
          <div className={styles.checklist}>
            <div className={styles.checklist01}>
              <img
                className={styles.checkListIcon}
                alt=""
                src="/check-list1.svg"
              />
              <div className={styles.unlimitedWatchersAccess}>
                Unlimited Watchers Access
              </div>
            </div>
            <div className={styles.checklist01}>
              <img
                className={styles.checkListIcon}
                alt=""
                src="/check-list1.svg"
              />
              <div className={styles.unlimitedWatchersAccess}>
                {xAnimeServers}
              </div>
            </div>
            <div className={styles.checklist01}>
              <img
                className={styles.checkListIcon}
                alt=""
                src="/check-list1.svg"
              />
              <div className={styles.unlimitedWatchersAccess}>
                {animeTracking}
              </div>
            </div>
            <div className={styles.checklist01}>
              <img
                className={styles.checkListIcon}
                alt=""
                src="/check-list1.svg"
              />
              <div className={styles.unlimitedWatchersAccess}>
                {xFreeSupport}
              </div>
            </div>
            <div className={styles.checklist032}>
              <img
                className={styles.checkListIcon}
                alt=""
                src="/check-list1.svg"
              />
              <div
                className={styles.unlimitedWatchersAccess}
                style={downloadIn480pStyle}
              >
                {downloadIn480p}
              </div>
            </div>
            <div className={styles.checklist01}>
              <img
                className={styles.checkListIcon}
                alt=""
                src="/check-list1.svg"
              />
              <div className={styles.unlimitedWatchersAccess}>
                Personal Timmer
              </div>
            </div>
          </div>
        </div>
        <div className={styles.registerNowWrapper}>
          <div className={styles.unlimitedWatchersAccess}>Register Now</div>
        </div>
      </div>
    );
  }
);

export default PriceCard;
