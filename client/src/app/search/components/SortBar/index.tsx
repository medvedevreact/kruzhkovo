"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { SortSection } from "@/types/api";
import styles from "./index.module.css";

type SortBarProps = {
  data: SortSection;
  totalCount: number;
};

export function SortBar({ data, totalCount }: SortBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("sort") ?? data.options[0]?.value ?? "";

  const setSort = (value: string) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("sort", value);
    next.set("page", "1");
    router.push(`/search?${next.toString()}`);
  };

  return (
    <div className={styles.bar}>
      <p className={styles.total}>{totalCount} секций</p>
      <div className={styles.options} role="group" aria-label="Сортировка">
        {data.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={clsx(
              styles.option,
              current === opt.value && styles.optionActive
            )}
            onClick={() => setSort(opt.value)}
            aria-pressed={current === opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
