import { memo } from "react";
import PriceCard from "./PriceCard";
import styles from "./ContainerPriceForm.module.css";
const ContainerPriceForm = memo(() => {
  return (
    <div className={styles.price}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <b className={styles.enhanceUserExperience}>
            Enhance user experience with healthy nutrition tips, support
            resources, and social elements.
          </b>
        </div>
        <div className={styles.buttonSide}>
          <div className={styles.makersButton}>
            <div className={styles.button}>Join us</div>
          </div>
        </div>
      </div>
      <div className={styles.pricing}>
        <div className={styles.listPackages}>
          <div className={styles.midPackage}>Pricing</div>
          <b className={styles.ourListPackages}>Our List Packages</b>
        </div>
        <div className={styles.subscribeParent}>
          <div className={styles.subscribe}>
            <div className={styles.billedMontly}>Billed Montly</div>
          </div>
          <div className={styles.subscribe1}>
            <div className={styles.billedMontly}>Billed Yearly</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <PriceCard
            basicPackage="Basic Package"
            prop="$25"
            xAnimeServers="2x Anime Servers"
            animeTracking="Anime Tracking"
            xFreeSupport="1x Free Support"
            downloadIn480p="Download in 480p"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.elitePackageParent}>
              <div className={styles.elitePackage}>Elite Package</div>
              <div className={styles.div}>$55</div>
              <div className={styles.perMonthbillAnnualy}>
                per month,bill annualy
              </div>
              <div className={styles.checklist}>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list2.svg"
                  />
                  <div className={styles.billedMontly}>
                    Unlimited Gym Access
                  </div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list2.svg"
                  />
                  <div className={styles.billedMontly}>
                    Free Fitness Consultant
                  </div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list2.svg"
                  />
                  <div className={styles.billedMontly}>Protein Suplement</div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list2.svg"
                  />
                  <div className={styles.billedMontly}>Nutrition Tracking</div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list2.svg"
                  />
                  <div className={styles.billedMontly}>Personal Trainer</div>
                </div>
              </div>
              <div className={styles.subscsribeNowWrapper}>
                <div className={styles.billedMontly}>Subscsribe Now</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.bestOfferWrapper}>
              <div className={styles.bestOffer}>Best Offer</div>
            </div>
            <div className={styles.midPackageParent}>
              <div className={styles.midPackage}>Mid Package</div>
              <div className={styles.parent}>
                <div className={styles.midPackage}>$55</div>
                <div className={styles.perMonthbillAnnualy1}>
                  per month,bill annualy
                </div>
              </div>
              <div className={styles.checklist1}>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list3.svg"
                  />
                  <div className={styles.billedMontly}>
                    Unlimited Watchers Access
                  </div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list3.svg"
                  />
                  <div className={styles.billedMontly}>4x Anime Servers</div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list3.svg"
                  />
                  <div className={styles.billedMontly}>Anime Tracking</div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list3.svg"
                  />
                  <div className={styles.billedMontly}>3x Free Support</div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list3.svg"
                  />
                  <div className={styles.billedMontly}>Download in 720P</div>
                </div>
                <div className={styles.checklist01}>
                  <img
                    className={styles.checkListIcon}
                    alt=""
                    src="/check-list3.svg"
                  />
                  <div className={styles.billedMontly}>Personal Timmer</div>
                </div>
              </div>
            </div>
            <div className={styles.registerNowWrapper}>
              <div className={styles.billedMontly}>Register Now</div>
            </div>
          </div>
          <PriceCard
            basicPackage="Pro Package"
            prop="$75"
            xAnimeServers="7x Anime Servers"
            animeTracking="Anime Tracking"
            xFreeSupport="5x Free Support"
            downloadIn480p="Download in 1080P"
            propColor="#e1e1e1"
          />
          <PriceCard
            basicPackage="Athlete Package"
            prop="$105"
            xAnimeServers="Free Servers 24/7"
            animeTracking="All Anime Tracking"
            xFreeSupport="Free Anime Group Chats"
            downloadIn480p="Download in 4K"
            propColor="#e1e1e1"
          />
        </div>
      </div>
    </div>
  );
});

export default ContainerPriceForm;
