import {
  PriceType,
  type ClubSnippet,
  type FiltersSection,
  type PaginationSection,
  type SortSection,
} from "@/types/api";

export const FILTERS_MOCK: FiltersSection = {
  categories: [
    { value: "aerobics", label: "Аэробатика" },
    { value: "skating", label: "Скалодром" },
    { value: "3d-modeling", label: "3D-моделирование" },
    { value: "programming", label: "Программирование" },
    { value: "design", label: "Дизайн" },
    { value: "football", label: "Футбол" },
    { value: "swimming", label: "Плавание" },
    { value: "music", label: "Музыка" },
    { value: "drawing", label: "Рисование" },
    { value: "robotics", label: "Робототехника" },
    { value: "chess", label: "Шахматы" },
    { value: "dance", label: "Танцы" },
  ],
  districts: [
    { value: "central", label: "Центральный р-н" },
    { value: "northern", label: "Северный р-н" },
    { value: "north-eastern", label: "Северо-Восточный р-н" },
    { value: "eastern", label: "Восточный р-н" },
    { value: "south-eastern", label: "Юго-Восточный р-н" },
    { value: "southern", label: "Южный р-н" },
    { value: "troitsky", label: "Троицкий р-н" },
  ],
  ratings: [
    { value: "5", label: "5" },
    { value: "4", label: "4+" },
    { value: "3", label: "3+" },
    { value: "2", label: "2+" },
    { value: "1", label: "1+" },
  ],
  priceRange: { min: 1000, max: 81900 },
};

export const SORT_MOCK: SortSection = {
  options: [
    { value: "popular", label: "Популярные" },
    { value: "rating", label: "Оценка" },
    { value: "cheap", label: "Дешевле" },
    { value: "expensive", label: "Дороже" },
  ],
};

export const SNIPPETS_MOCK: ClubSnippet[] = [
  {
    id: "1",
    category: "Плавание",
    title: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    addresses: ["Москва, Проспект 60-лет Октября, 21, м. Люблино"],
    prices: [
      { type: PriceType.Group, amount: 1000 },
      { type: PriceType.Individual, amount: 2500 },
    ],
  },
  {
    id: "2",
    category: "Плавание",
    title: 'ДЮСШ "Динамо"',
    rating: 4.6,
    reviewCount: 284,
    addresses: ["Москва, Проспект 60-лет Октября, 21, м. Люблино"],
    prices: [{ type: PriceType.Group, amount: 1000 }],
  },
  {
    id: "3",
    category: "Футбол",
    title: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    addresses: ["Москва, Проспект 60-лет Октября, 21, м. Люблино"],
    prices: [{ type: PriceType.Group, amount: 1000 }],
  },
  {
    id: "4",
    category: "Программирование",
    title: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    addresses: ["Москва, Проспект 60-лет Октября, 21, м. Люблино"],
    prices: [{ type: PriceType.Group, amount: 1000 }],
  },
  {
    id: "5",
    category: "Дизайн",
    title: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    addresses: [
      "Москва, Проспект 60-лет Октября, 21, м. Люблино",
      "Москва, ул. Большая Серпуховская, 44, м. Серпуховская",
      "Москва, ул. Новослободская, 14/19, м. Новослободская",
    ],
    prices: [{ type: PriceType.Group, amount: 1000 }],
  },
];

export const PAGINATION_MOCK: PaginationSection = {
  totalCount: 300,
  totalPages: 60,
  page: 1,
};

export const SNIPPETS_PER_PAGE = 5;

export function filterSnippets(
  snippets: ClubSnippet[],
  params: URLSearchParams
): ClubSnippet[] {
  let result = [...snippets];

  const categories = params.getAll("category");
  if (categories.length > 0) {
    result = result.filter((s) => categories.includes(s.category.toLowerCase()));
  }

  const priceFrom = params.get("priceFrom");
  if (priceFrom) {
    result = result.filter((s) =>
      s.prices.some((p) => p.amount >= Number(priceFrom))
    );
  }

  const priceTo = params.get("priceTo");
  if (priceTo) {
    result = result.filter((s) =>
      s.prices.some((p) => p.amount <= Number(priceTo))
    );
  }

  const ratingMin = params.get("ratingMin");
  if (ratingMin) {
    result = result.filter((s) => s.rating >= Number(ratingMin));
  }

  const sort = params.get("sort");
  if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
  else if (sort === "cheap")
    result.sort(
      (a, b) =>
        Math.min(...a.prices.map((p) => p.amount)) -
        Math.min(...b.prices.map((p) => p.amount))
    );
  else if (sort === "expensive")
    result.sort(
      (a, b) =>
        Math.min(...b.prices.map((p) => p.amount)) -
        Math.min(...a.prices.map((p) => p.amount))
    );

  return result;
}
