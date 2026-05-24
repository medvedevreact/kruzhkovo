import Image from "next/image";
import type { IconType } from "react-icons";
import { MdArticle, MdAutoAwesome, MdSportsBasketball } from "react-icons/md";

import { Container } from "@/shared/ui/Container";

import styles from "./index.module.css";

const WHY_REASONS: {
  id: string;
  bg: string;
  Icon: IconType;
  lines: [string, string];
}[] = [
  {
    id: "catalog",
    bg: "/why-reason-bg-rating.png",
    Icon: MdSportsBasketball,
    lines: ["Сотни кружков и секций", "в Москве для детей"],
  },
  {
    id: "ai",
    bg: "/why-reason-bg-loyalty.png",
    Icon: MdAutoAwesome,
    lines: ["ИИ подскажет подходящий", "кружок или секцию"],
  },
  {
    id: "blog",
    bg: "/why-reason-bg-globe.png",
    Icon: MdArticle,
    lines: ["Статьи и советы", "в блоге для родителей"],
  },
];

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
            {WHY_REASONS.map(({ id, bg, Icon, lines }) => (
              <div key={id} className={styles.reason}>
                <Image
                  src={bg}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 400px"
                  className={styles.reasonBg}
                />
                <div className={styles.reasonContent}>
                  <Icon className={styles.reasonIcon} aria-hidden />
                  <p className={styles.reasonText}>
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
