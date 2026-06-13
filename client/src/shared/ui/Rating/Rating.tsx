import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import type { RatingProps } from "./Rating.types";
import styles from "./Rating.module.css";

export function Rating({ value, reviewCount, className }: RatingProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <FaStar className={styles.star} aria-hidden />
      <span className={styles.value}>{value}</span>
      {reviewCount !== undefined && (
        <span className={styles.count}>{reviewCount} отзывов</span>
      )}
    </div>
  );
}
