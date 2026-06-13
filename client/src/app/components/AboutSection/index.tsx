import { Container } from "@/shared/ui/Container";

import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { ToSearchIcon } from "../ToSearchIcon";

export function AboutSection() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.aboutInner}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              Удобный агрегатор <br /> детских секций <br /> и кружков
            </h2>
            <span className={styles.aboutText}>
              Здесь вы можете быстро и легко найти все, что вам нужно
            </span>
            <Link href="/search" className={styles.aboutButton}>
              <span>Перейти к поиску</span>
              <ToSearchIcon />
            </Link>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/about-section/guitar.svg"
              alt=""
              width={500}
              height={500}
              className={styles.aboutImageImg}
              sizes="(max-width: 768px) 0px, (max-width: 1024px) 38vw, 500px"
            />
            <Image
              src="/icons/pink-star.png"
              alt=""
              width={70}
              height={70}
              className={styles.aboutImagePinkStar}
            />
            <Image
              src="/icons/green-star.svg"
              alt=""
              width={70}
              height={70}
              className={styles.aboutImageGreenStar}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
