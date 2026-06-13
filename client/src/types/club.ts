export type ClubCategory =
  | "aerobics"
  | "skating"
  | "3d-modeling"
  | "programming"
  | "design"
  | "football"
  | "swimming";

export type ClubDistrict =
  | "central"
  | "northern"
  | "north-eastern"
  | "eastern"
  | "south-eastern"
  | "southern"
  | "troitsky";

export type ClubSortOption = "popular" | "rating" | "cheap" | "expensive";

export type Club = {
  id: string;
  name: string;
  /** Название организации/школы */
  organization: string;
  rating: number;
  reviewCount: number;
  city: string;
  address: string;
  nearestMetro: string;
  priceFrom: number;
  /** Цена за занятие в рублях */
  priceUnit: "занятие" | "месяц";
  categories: ClubCategory[];
  district: ClubDistrict;
  imageUrl: string;
};

export type ClubFilters = {
  categories: ClubCategory[];
  priceFrom: number | null;
  priceTo: number | null;
  districts: ClubDistrict[];
  ratingMin: number | null;
  sort: ClubSortOption;
  page: number;
};

export const CATEGORY_LABELS: Record<ClubCategory, string> = {
  aerobics: "Аэробатика",
  skating: "Скалодром",
  "3d-modeling": "3D-моделирование",
  programming: "Программирование",
  design: "Дизайн",
  football: "Футбол",
  swimming: "Плавание",
};

export const DISTRICT_LABELS: Record<ClubDistrict, string> = {
  central: "Центральный р-н",
  northern: "Северный р-н",
  "north-eastern": "Северо-Восточный р-н",
  eastern: "Восточный р-н",
  "south-eastern": "Юго-Восточный р-н",
  southern: "Южный р-н",
  troitsky: "Троицкий р-н",
};

export const SORT_LABELS: Record<ClubSortOption, string> = {
  popular: "Популярные",
  rating: "Оценка",
  cheap: "Дешевле",
  expensive: "Дороже",
};

export const DEFAULT_FILTERS: ClubFilters = {
  categories: [],
  priceFrom: null,
  priceTo: null,
  districts: [],
  ratingMin: null,
  sort: "popular",
  page: 1,
};
