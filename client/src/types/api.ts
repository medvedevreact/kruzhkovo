export enum PriceType {
  Group = "group",
  Individual = "individual",
}

export type Price = {
  type: PriceType;
  amount: number;
};

export type FilterOption = {
  value: string;
  label: string;
};

export type FiltersSection = {
  categories: FilterOption[];
  districts: FilterOption[];
  ratings: FilterOption[];
  priceRange: { min: number; max: number };
};

export type SortSection = {
  options: FilterOption[];
};

export type ClubSnippet = {
  id: string;
  category: string;
  title: string;
  rating: number;
  reviewCount: number;
  /** Каждый элемент — один адрес филиала, формат: "Город, улица, м. Метро" */
  addresses: string[];
  prices: Price[];
};

export type PaginationSection = {
  totalCount: number;
  totalPages: number;
  page: number;
};
