import type { Club } from "@/types/club";

export const CLUBS_MOCK: Club[] = [
  {
    id: "1",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["swimming", "aerobics"],
    district: "southern",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "2",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.6,
    reviewCount: 284,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["swimming"],
    district: "central",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "3",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["football"],
    district: "northern",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "4",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["programming"],
    district: "eastern",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "5",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["design"],
    district: "southern",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "6",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["skating"],
    district: "troitsky",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "7",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["3d-modeling"],
    district: "north-eastern",
    imageUrl: "/mock/club-pool.jpg",
  },
  {
    id: "8",
    name: 'ДЮСШ "Динамо"',
    organization: 'ДЮСШ "Динамо"',
    rating: 4.4,
    reviewCount: 159,
    city: "Москва",
    address: "Проспект 60-лет Октября, 21",
    nearestMetro: "Люблино",
    priceFrom: 1000,
    priceUnit: "занятие",
    categories: ["swimming", "football"],
    district: "south-eastern",
    imageUrl: "/mock/club-pool.jpg",
  },
];

export const CLUBS_PER_PAGE = 5;

export function filterClubs(clubs: Club[], params: URLSearchParams): Club[] {
  let result = [...clubs];

  const categories = params.getAll("category") as Club["categories"];
  if (categories.length > 0) {
    result = result.filter((c) =>
      categories.some((cat) => c.categories.includes(cat))
    );
  }

  const districts = params.getAll("district") as Club["district"][];
  if (districts.length > 0) {
    result = result.filter((c) => districts.includes(c.district));
  }

  const priceFrom = params.get("priceFrom");
  if (priceFrom) {
    result = result.filter((c) => c.priceFrom >= Number(priceFrom));
  }

  const priceTo = params.get("priceTo");
  if (priceTo) {
    result = result.filter((c) => c.priceFrom <= Number(priceTo));
  }

  const ratingMin = params.get("ratingMin");
  if (ratingMin) {
    result = result.filter((c) => c.rating >= Number(ratingMin));
  }

  const sort = params.get("sort");
  if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
  else if (sort === "cheap") result.sort((a, b) => a.priceFrom - b.priceFrom);
  else if (sort === "expensive") result.sort((a, b) => b.priceFrom - a.priceFrom);

  return result;
}
