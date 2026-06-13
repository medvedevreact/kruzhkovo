"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { PaginationSection } from "@/types/api";
import styles from "./index.module.css";

type PaginationProps = {
  data: PaginationSection;
};

export function Pagination({ data }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = data.page;

  if (data.totalPages <= 1) return null;

  const goTo = (page: number) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("page", String(page));
    router.push(`/search?${next.toString()}`);
  };

  const pages = buildPageNumbers(current, data.totalPages);

  return (
    <nav className={styles.pagination} aria-label="Страницы">
      <button
        type="button"
        className={styles.arrow}
        onClick={() => goTo(current - 1)}
        disabled={current === 1}
        aria-label="Предыдущая страница"
      >
        <FaChevronLeft aria-hidden />
      </button>

      {pages.map((item, idx) =>
        item === "..." ? (
          <span key={`ellipsis-${idx}`} className={styles.ellipsis}>
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={clsx(styles.page, item === current && styles.pageCurrent)}
            onClick={() => goTo(item)}
            aria-label={`Страница ${item}`}
            aria-current={item === current ? "page" : undefined}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        className={styles.arrow}
        onClick={() => goTo(current + 1)}
        disabled={current === data.totalPages}
        aria-label="Следующая страница"
      >
        <FaChevronRight aria-hidden />
      </button>
    </nav>
  );
}

function buildPageNumbers(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  for (
    let i = Math.max(2, current - 1);
    i <= Math.min(total - 1, current + 1);
    i++
  ) {
    pages.push(i);
  }
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}
