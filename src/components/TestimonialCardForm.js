import { memo } from "react";
import styles from "./TestimonialCardForm.module.css";
const TestimonialCardForm = memo(() => {
  return (
    <div className={styles.cta}>
      <div className={styles.testimonials}>
        <div className={styles.testimonialParent}>
          <div className={styles.testimonial}>
            <b className={styles.whatOurMember}>
              What Our Member Say About Us?
            </b>
          </div>
          <div className={styles.textCountParent}>
            <div className={styles.testimonial}>
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
            <div className={styles.kSatisfiedCustomer}>
              10K+ Satisfied Customer
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.itHasBeen}>
            “ It has been a long journey following a world full of wonders and
            while the Main character faces many challanges and overcomes all
            odds it feels like i am with them and making all the changes along
            with them ”
          </div>
          <div className={styles.ellipseGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-5@2x.png"
            />
            <div className={styles.edwardNewgateParent}>
              <div className={styles.edwardNewgate}>Edward Newgate</div>
              <div className={styles.onePieceEnjoyer}>One Piece Enjoyer</div>
            </div>
          </div>
          <div className={styles.claritystarSolidParent}>
            <img
              className={styles.claritystarSolidIcon}
              alt=""
              src="/claritystarsolid.svg"
            />
            <img
              className={styles.claritystarSolidIcon}
              alt=""
              src="/claritystarsolid.svg"
            />
            <img
              className={styles.claritystarSolidIcon}
              alt=""
              src="/claritystarsolid.svg"
            />
            <img
              className={styles.claritystarSolidIcon}
              alt=""
              src="/claritystarsolid.svg"
            />
            <img
              className={styles.claritystarSolidIcon}
              alt=""
              src="/claritystarsolid.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonial1}>Testimonial</div>
      </div>
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
            src="/remixiconslinesystemarrowleftline3.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default TestimonialCardForm;
