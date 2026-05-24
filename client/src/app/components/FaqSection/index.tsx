"use client";

import { Container } from "@/shared/ui/Container";
import clsx from "clsx";
import { useCallback, useState } from "react";

import { ToSearchIcon } from "../ToSearchIcon";
import styles from "./index.module.css";
import Image from "next/image";

const FAQ_ITEMS = [
  {
    id: "1",
    question: "Чем занятия по программированию отличаются от уроков информатики в школе?",
    answer:
      "Воспользуйтесь поиском по городам и направлениям: вы можете фильтровать программы по возрасту, расписанию и формату занятий.",
  },
  {
    id: "2",
    question: "Чем занятия по программированию отличаются от уроков информатики в школе?",
    answer:
      "Да, платформа поддерживает иностранных пользователей. Уточните доступные форматы занятий в карточке организации или свяжитесь с представителем секции напрямую.",
  },
  {
    id: "3",
    question: "Чем занятия по программированию отличаются от уроков информатики в школе?",
    answer:
      "Напишите нам через форму обратной связи или укажите замечание в карточке — мы проверим данные и обновим информацию.",
  },
] as const;

export function FaqSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.faqInner}>
          <Image
            src="/icons/green-star.svg"
            alt=""
            width={85}
            height={85}
            className={styles.faqTitleDecoration}
            sizes="85px"
          />
          <h2 className={styles.faqTitle}>Частые вопросы</h2>
          <ul className={styles.faqList}>
            {FAQ_ITEMS.map((item) => {
              const isOpen = !!open[item.id];
              return (
                <li key={item.id} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqTrigger}
                    aria-expanded={isOpen}
                    onClick={() => toggle(item.id)}
                  >
                    <span className={styles.faqQuestion}>{item.question}</span>
                    <span
                      className={clsx(
                        styles.faqIconWrap,
                        isOpen && styles.faqIconWrapOpen,
                      )}
                      aria-hidden
                    >
                      <ToSearchIcon />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className={styles.faqPanel} role="region">
                      <p className={styles.faqAnswer}>{item.answer}</p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
