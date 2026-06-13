import { FaMapMarkerAlt, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Button } from "@/shared/ui/Button";
import { Rating } from "@/shared/ui/Rating";
import type { ClubSnippet } from "@/types/api";
import styles from "./index.module.css";

type ClubCardProps = {
  club: ClubSnippet;
};

export function ClubCard({ club }: ClubCardProps) {
  const minPrice = Math.min(...club.prices.map((p) => p.amount));

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder} aria-hidden />
      </div>

      <div className={styles.body}>
        <p className={styles.category}>{club.category}</p>
        <h2 className={styles.title}>{club.title}</h2>

        <Rating
          value={club.rating}
          reviewCount={club.reviewCount}
          className={styles.rating}
        />

        <div className={styles.addresses}>
          <FaMapMarkerAlt className={styles.addressIcon} aria-hidden />
          <span className={styles.addressText}>
            {club.addresses[0]}
            {club.addresses.length > 1 && (
              <span className={styles.addressMore}>
                {" "}и ещё {club.addresses.length - 1}
              </span>
            )}
          </span>
        </div>

        <p className={styles.price}>
          от {minPrice.toLocaleString("ru-RU")} руб / занятие
        </p>
      </div>

      <div className={styles.actions}>
        <div className={styles.actionIcons}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Сохранить"
          >
            <FaRegBookmark aria-hidden />
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Поделиться"
          >
            <FaShareAlt aria-hidden />
          </button>
        </div>
        <Button as="link" href={`/club/${club.id}`} className={styles.detailBtn}>
          Подробнее
        </Button>
      </div>
    </article>
  );
}
