# Frontend — кружково

Next.js 16 (App Router) + React 19 + TypeScript 5 (strict) + CSS Modules + clsx.

## Команды

```bash
npm run dev
npm run build
npm run lint
npx tsc --noEmit
```

## Docs

- `docs/DESIGN_SYSTEM.md` — токены, компоненты DS, паттерны
- `docs/PAGES.md` — структура страниц, URL-параметры, контракты

## Правила

- Стили — только CSS Modules, camelCase классы
- Никогда `any`
- Новые UI-примитивы → `shared/ui/`, страничные компоненты → `app/[page]/components/`
- Полиморфные компоненты — discriminated union + `omitProps` из `shared/lib/omitProps.ts`
- Импорты через алиас `@/`
- Семантический HTML + ARIA на всех интерактивных элементах
- `@media (prefers-reduced-motion: reduce)` везде где есть transition/animation
- При добавлении нового компонента в `shared/ui/` — обязательно добавить секцию в `docs/DESIGN_SYSTEM.md` с props, примером использования и описанием стейтов
