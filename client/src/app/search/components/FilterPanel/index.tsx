"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { TextInput } from "@/shared/ui/TextInput";
import { Drawer } from "@/shared/ui/Drawer";
import type { FiltersSection } from "@/types/api";
import styles from "./index.module.css";

const CATEGORIES_VISIBLE = 6;
const DISTRICTS_VISIBLE = 5;

type FilterPanelProps = {
  data: FiltersSection;
};

export function FilterPanel({ data }: FilterPanelProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>(
    searchParams.getAll("category")
  );
  const [districts, setDistricts] = useState<string[]>(
    searchParams.getAll("district")
  );
  const [priceFrom, setPriceFrom] = useState(
    searchParams.get("priceFrom") ?? ""
  );
  const [priceTo, setPriceTo] = useState(searchParams.get("priceTo") ?? "");
  const [ratingMin, setRatingMin] = useState(
    searchParams.get("ratingMin") ?? ""
  );
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllDistricts, setShowAllDistricts] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const visibleCategories = showAllCategories
    ? data.categories
    : data.categories.slice(0, CATEGORIES_VISIBLE);

  const visibleDistricts = showAllDistricts
    ? data.districts
    : data.districts.slice(0, DISTRICTS_VISIBLE);

  const hiddenCategoriesCount = data.categories.length - CATEGORIES_VISIBLE;
  const hiddenDistrictsCount = data.districts.length - DISTRICTS_VISIBLE;

  const toggle = (
    value: string,
    selected: string[],
    setSelected: (v: string[]) => void
  ) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  const handleSearch = () => {
    const next = new URLSearchParams();
    categories.forEach((c) => next.append("category", c));
    districts.forEach((d) => next.append("district", d));
    if (priceFrom) next.set("priceFrom", priceFrom);
    if (priceTo) next.set("priceTo", priceTo);
    if (ratingMin) next.set("ratingMin", ratingMin);
    next.set("page", "1");
    router.push(`/search?${next.toString()}`);
    setDrawerOpen(false);
  };

  const handleReset = () => {
    setCategories([]);
    setDistricts([]);
    setPriceFrom("");
    setPriceTo("");
    setRatingMin("");
    router.push("/search");
    setDrawerOpen(false);
  };

  const activeCount =
    categories.length +
    districts.length +
    (priceFrom ? 1 : 0) +
    (priceTo ? 1 : 0) +
    (ratingMin ? 1 : 0);

  const content = (
    <>
      <div className={styles.groups}>
        <section className={styles.group}>
          <h3 className={styles.groupTitle}>Направление</h3>
          <ul className={styles.checkList} role="list">
            {visibleCategories.map((cat) => (
              <li key={cat.value}>
                <Checkbox
                  label={cat.label}
                  checked={categories.includes(cat.value)}
                  onChange={() => toggle(cat.value, categories, setCategories)}
                />
              </li>
            ))}
          </ul>
          {!showAllCategories && hiddenCategoriesCount > 0 && (
            <button
              type="button"
              className={styles.showMore}
              onClick={() => setShowAllCategories(true)}
            >
              Ещё {hiddenCategoriesCount} категорий
            </button>
          )}
        </section>

        <section className={styles.group}>
          <h3 className={styles.groupTitle}>
            Цена (за 1 занятие)
            <span className={styles.groupTitleUnit}> руб</span>
          </h3>
          <div className={styles.priceRow}>
            <TextInput
              type="number"
              placeholder={`от ${data.priceRange.min.toLocaleString("ru-RU")}`}
              value={priceFrom}
              min={0}
              onChange={(e) => setPriceFrom(e.target.value)}
              aria-label="Цена от"
              fieldClassName={styles.priceField}
            />
            <TextInput
              type="number"
              placeholder={`до ${data.priceRange.max.toLocaleString("ru-RU")}`}
              value={priceTo}
              min={0}
              onChange={(e) => setPriceTo(e.target.value)}
              aria-label="Цена до"
              fieldClassName={styles.priceField}
            />
          </div>
        </section>

        <section className={styles.group}>
          <h3 className={styles.groupTitle}>Местоположение</h3>
          <ul className={styles.checkList} role="list">
            {visibleDistricts.map((dist) => (
              <li key={dist.value}>
                <Checkbox
                  label={dist.label}
                  checked={districts.includes(dist.value)}
                  onChange={() => toggle(dist.value, districts, setDistricts)}
                />
              </li>
            ))}
          </ul>
          {!showAllDistricts && hiddenDistrictsCount > 0 && (
            <button
              type="button"
              className={styles.showMore}
              onClick={() => setShowAllDistricts(true)}
            >
              Ещё {hiddenDistrictsCount} районов
            </button>
          )}
        </section>

        <section className={styles.group}>
          <h3 className={styles.groupTitle}>Оценка</h3>
          <ul className={styles.checkList} role="list">
            {data.ratings.map((r) => (
              <li key={r.value}>
                <Checkbox
                  label={r.label}
                  checked={ratingMin === r.value}
                  onChange={() =>
                    setRatingMin(ratingMin === r.value ? "" : r.value)
                  }
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.footer}>
        <Button onClick={handleSearch} className={styles.searchBtn}>
          Искать
        </Button>
        <button type="button" className={styles.resetBtn} onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* десктоп — статичная панель */}
      <aside className={styles.panel} aria-label="Фильтры">
        <h2 className={styles.title}>Фильтры</h2>
        {content}
      </aside>

      {/* мобиле — кнопка + Drawer */}
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={() => setDrawerOpen(true)}
      >
        Фильтры{activeCount > 0 ? ` (${activeCount})` : ""}
      </button>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Фильтры"
      >
        {content}
      </Drawer>
    </>
  );
}
