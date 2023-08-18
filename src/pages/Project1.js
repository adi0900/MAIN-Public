import Header from "../components/Header";
import AnimeLifestyleContainer from "../components/AnimeLifestyleContainer";
import AnimeWorldContainer from "../components/AnimeWorldContainer";
import ContainerCard from "../components/ContainerCard";
import CollectionHeroSection from "../components/CollectionHeroSection";
import ContainerPriceForm from "../components/ContainerPriceForm";
import TestimonialCardForm from "../components/TestimonialCardForm";
import SubscribeFormContainer from "../components/SubscribeFormContainer";
import BottomFooter from "../components/BottomFooter";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import styles from "./Project1.module.css";
const Project1 = () => {
  return (
    <div className={styles.project1}>
      <Header />
      <AnimeLifestyleContainer />
      <div className={styles.section}>
        <AnimeWorldContainer />
        <ContainerCard />
        <div className={styles.animationWrapper}>
          <div className={styles.animation}>Animation</div>
        </div>
      </div>
      <CollectionHeroSection />
      <div className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.textSide}>
            <b className={styles.enhanceUserExperience}>
              Enhance user experience with all these life changing events of the
              characters you feel so connected with.
            </b>
          </div>
          <div className={styles.buttonSide}>
            <div className={styles.makersButton}>
              <div className={styles.button}>Join us</div>
            </div>
          </div>
        </div>
      </div>
      <ContainerPriceForm />
      <TestimonialCardForm />
      <SubscribeFormContainer />
      <div className={styles.footer}>
        <div className={styles.container1}>
          <BottomFooter />
          <Footer />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Project1;
