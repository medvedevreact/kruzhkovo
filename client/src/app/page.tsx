import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <section className={styles.about}>
        <Container>
          <div className={styles.aboutInner}></div>
        </Container>
      </section>

      <section className={styles.why}>
        <Container>
          <div className={styles.whyInner}>
            <div className={styles.whyTitle}>
              <Image
                src="/why-title-decoration.png"
                alt=""
                width={85}
                height={85}
                className={styles.whyTitleDecoration}
              />
              <span className={styles.whyTitleText}>Почему мы?</span>
            </div>

            <div className={styles.whyReasons}>
              <div className={styles.whyReason}>
                <Image
                  src="/why-reason-bg-rating.png"
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 400px"
                  className={styles.whyReasonBg}
                />
                <div className={styles.whyReasonContent}>
                  <Image
                    src="/why-reason-icon-rating.png"
                    alt=""
                    width={64}
                    height={64}
                    className={styles.whyReasonIcon}
                  />
                  <p className={styles.whyReasonText}>
                    Рейтинг с лучшими <br /> секциями в разных категориях
                  </p>
                </div>
              </div>
              <div className={styles.whyReason}>
                <Image
                  src="/why-reason-bg-loyalty.png"
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 400px"
                  className={styles.whyReasonBg}
                />
                <div className={styles.whyReasonContent}>
                  <Image
                    src="/why-reason-icon-loyalty.png"
                    alt=""
                    width={64}
                    height={64}
                    className={styles.whyReasonIcon}
                  />
                  <p className={styles.whyReasonText}>
                    Система лояльности. Используй баллы на сайте и получай
                    скидки до 50%
                  </p>
                </div>
              </div>
              <div className={styles.whyReason}>
                <Image
                  src="/why-reason-bg-globe.png"
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 400px"
                  className={styles.whyReasonBg}
                />
                <div className={styles.whyReasonContent}>
                  <Image
                    src="/why-reason-icon-globe.png"
                    alt=""
                    width={64}
                    height={64}
                    className={styles.whyReasonIcon}
                  />
                  <p className={styles.whyReasonText}>
                    Доступ для иностранных <br />
                    студентов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.faq}>
        <Container>
          <div className={styles.faqInner}></div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
