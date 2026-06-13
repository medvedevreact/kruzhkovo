# Pages

## Структура

```
app/
├── page.tsx                  # Главная (/)
├── layout.tsx                # Root layout — шрифты, metadata
├── globals.css               # CSS tokens
├── components/               # Компоненты только для главной
│   ├── AboutSection/
│   ├── WhySection/
│   ├── FaqSection/
│   └── ToSearchIcon/
└── search/                   # Страница поиска (/search)
    ├── page.tsx
    ├── layout.tsx            # Header + Footer
    ├── page.module.css
    └── components/
        ├── SearchResults/    # Клиентский корень, читает searchParams
        ├── FilterPanel/      # Фильтры + Drawer на мобиле
        ├── SortBar/          # Сортировка + счётчик
        ├── ClubCard/         # Карточка кружка
        └── Pagination/       # Пагинация
```

Новые страницы добавляются как `app/[route]/page.tsx` + `layout.tsx` с Header/Footer.

---

## Главная (`/`)

**Секции:** AboutSection → WhySection → FaqSection  
**Header/Footer:** прямо в `page.tsx`, layout не используется.

### AboutSection
- CTA-кнопка "Перейти к поиску" → `/search`
- Использует `<Link>` (не Button из DS — кастомный дизайн с ToSearchIcon справа)

### FaqSection
- Аккордеон: `open: Record<string, boolean>` 
- Анимация раскрытия: `grid-template-rows: 0fr → 1fr`

---

## Страница поиска (`/search`)

### Архитектура

Static export → вся логика фильтрации на клиенте.  
`SearchResults` — клиентский компонент, читает URL через `useSearchParams`.  
`page.tsx` — серверный, оборачивает в `<Suspense>`.

### URL-параметры

| Параметр | Тип | Описание |
|---|---|---|
| `category` | string[] | Можно несколько через `append` |
| `district` | string[] | Можно несколько |
| `priceFrom` | number | Цена от |
| `priceTo` | number | Цена до |
| `ratingMin` | number | Минимальная оценка |
| `sort` | string | popular / rating / cheap / expensive |
| `page` | number | Текущая страница |

Обновление URL:
```typescript
const next = new URLSearchParams(searchParams.toString())
next.set("sort", value)
next.set("page", "1")  // сброс страницы при смене фильтра
router.push(`/search?${next.toString()}`)
```

### Контракты секций (`types/api.ts`)

```typescript
FiltersSection    // категории, районы, оценки, priceRange
SortSection       // опции сортировки
ClubSnippet       // карточка кружка в списке
PaginationSection // page, totalPages, totalCount
```

### FilterPanel

**Важно:** фильтры применяются только по кнопке "Искать", не мгновенно.  
Локальный state хранит выбранные значения → при клике "Искать" пишет в URL.

- Десктоп: статичная панель 220px слева
- Мобиле: кнопка "Фильтры (N)" + `Drawer` из DS

### ClubCard

- `addresses: string[]` — один адрес = одна строка "Город, улица, м. Метро"
- Если адресов > 1 — показываем первый + "и ещё N" (фиолетовый)
- Цена: `Math.min(...prices.map(p => p.amount))` → "от X руб / занятие"
- Кнопка "Подробнее" → `/club/[id]`

### Моки (`data/searchPage.ts`)

Пока бэкенда нет — все данные из моков.  
При подключении бэкенда заменить `FILTERS_MOCK`, `SORT_MOCK`, `SNIPPETS_MOCK` на fetch.  
`filterSnippets()` — клиентская фильтрация, удалить когда бэкенд будет фильтровать сам.

---

## Страница кружка (`/club/[id]`)

Ещё не реализована. Дизайн есть в `design/Страница одного кружка.png`.

---

## Соглашения

### Новый компонент страницы
```
app/[page]/components/ComponentName/
  ├── index.tsx
  └── index.module.css
```

### Новый компонент DS
```
shared/ui/ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.types.ts
  ├── ComponentName.module.css
  └── index.ts              ← только реэкспорт
```

### CSS классы — camelCase
```css
.cardTitle    /* не card-title */
.optionActive /* модификатор — суффикс */
.panelOpen    /* состояние */
```

### Импорты
```typescript
import { Button } from "@/shared/ui/Button"
import { Checkbox } from "@/shared/ui/Checkbox"
import type { ClubSnippet } from "@/types/api"
import { omitProps } from "@/shared/lib/omitProps"
```
