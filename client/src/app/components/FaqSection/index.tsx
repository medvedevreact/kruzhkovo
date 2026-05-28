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
    question: "Пользоваться каталогом бесплатно?",
    answer:
      "Да. Поиск кружков, секций и курсов в Москве для родителей бесплатный. Абонемент и пробное занятие оплачиваются напрямую организации — мы не берём комиссию с семей.",
  },
  {
    id: "2",
    question: "Как найти занятия рядом с домом или метро?",
    answer:
      "В поиске укажите район, станцию метро, возраст ребёнка и категорию — список подстроится под ваши фильтры. В карточке кружка есть адрес, расписание, возрастные группы и формат: офлайн, онлайн или гибрид.",
  },
  {
    id: "3",
    question: "Можно ли записать ребёнка через сайт?",
    answer:
      "Да. В карточке кружка оставьте заявку с контактами — мы передадим их секции, и организация свяжется с вами, чтобы уточнить расписание и запись на пробное или абонемент.",
  },
  {
    id: "4",
    question: "Откуда берётся информация о кружках?",
    answer:
      "Карточки заполняют сами организации; перед публикацией мы проверяем основные данные. Если цена, расписание или контакты изменились — напишите через обратную связь, мы уточним и обновим.",
  },
  {
    id: "5",
    question: "Можно ли доверять отзывам?",
    answer:
      "Сейчас отзывы проходят модерацию. Дальше добавим верифицированные отзывы от родителей, которые действительно посещали занятия — так будет проще сравнивать кружки.",
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
          <div className={styles.faqHeader}>
            <Image
              src="/icons/green-star.svg"
              alt=""
              width={85}
              height={85}
              className={styles.faqTitleDecoration}
              sizes="85px"
            />
            <h2 className={styles.faqTitle}>
              Частые вопросы
              <Image
                src="/vopros.png"
                alt=""
                width={68}
                height={90}
                className={styles.faqTitleQuestion}
                sizes="68px"
              />
            </h2>
          </div>
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
