import Image from "next/image";

import { Container } from "@/shared/ui/Container";

import styles from "./index.module.css";

export function WhySection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.title}>
            <Image
              src="/icons/pink-star.png"
              alt=""
              width={85}
              height={85}
              className={styles.titleDecoration}
            />
            <span className={styles.titleText}>Почему мы?</span>
          </div>

          <div className={styles.reasons}>
            <div className={styles.reason}>
              <Image
                src="/why-reason-bg-rating.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.reasonBg}
              />
              <div className={styles.reasonContent}>
                <Image
                  src="/why-reason-icon-rating.png"
                  alt=""
                  width={64}
                  height={64}
                  className={styles.reasonIcon}
                />
                <p className={styles.reasonText}>
                  Рейтинг с лучшими <br /> секциями в разных категориях
                </p>
              </div>
            </div>
            <div className={styles.reason}>
              <Image
                src="/why-reason-bg-loyalty.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.reasonBg}
              />
              <div className={styles.reasonContent}>
                <Image
                  src="/why-reason-icon-loyalty.png"
                  alt=""
                  width={64}
                  height={64}
                  className={styles.reasonIcon}
                />
                <p className={styles.reasonText}>
                  Система лояльности. Используй баллы на сайте и получай скидки
                  до 50%
                </p>
              </div>
            </div>
            <div className={styles.reason}>
              <Image
                src="/why-reason-bg-globe.png"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.reasonBg}
              />
              <div className={styles.reasonContent}>
                <Image
                  src="/why-reason-icon-globe.png"
                  alt=""
                  width={64}
                  height={64}
                  className={styles.reasonIcon}
                />
                <p className={styles.reasonText}>
                  Доступ для иностранных <br />
                  студентов
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
