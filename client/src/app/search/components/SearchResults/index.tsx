"use client";

import { useSearchParams } from "next/navigation";
import {
  FILTERS_MOCK,
  PAGINATION_MOCK,
  SNIPPETS_MOCK,
  SNIPPETS_PER_PAGE,
  SORT_MOCK,
  filterSnippets,
} from "@/data/searchPage";
import { FilterPanel } from "../FilterPanel";
import { SortBar } from "../SortBar";
import { ClubCard } from "../ClubCard";
import { Pagination } from "../Pagination";
import styles from "./index.module.css";

export function SearchResults() {
  const searchParams = useSearchParams();

  const filtered = filterSnippets(SNIPPETS_MOCK, searchParams as unknown as URLSearchParams);
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const totalPages = Math.ceil(filtered.length / SNIPPETS_PER_PAGE);
  const clubs = filtered.slice(
    (page - 1) * SNIPPETS_PER_PAGE,
    page * SNIPPETS_PER_PAGE
  );

  return (
    <div className={styles.layout}>
      <FilterPanel data={FILTERS_MOCK} />
      <div className={styles.results}>
        <SortBar data={SORT_MOCK} totalCount={filtered.length} />
        {clubs.length > 0 ? (
          <ul className={styles.list} role="list">
            {clubs.map((club) => (
              <li key={club.id}>
                <ClubCard club={club} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            По вашему запросу ничего не найдено. Попробуйте изменить фильтры.
          </p>
        )}
        <Pagination
          data={{ ...PAGINATION_MOCK, page, totalPages }}
        />
      </div>
    </div>
  );
}
