# Design System

`shared/ui/` — только примитивы без бизнес-логики и без зависимостей от `types/api.ts`.

## CSS Tokens (`globals.css`)

```css
--color-primary: #7b22d4        /* кнопки, акценты, FAQ */
--color-primary-light: #9b4fe8  /* hover на primary */
--color-accent: #a7ff00         /* хедер, декор */
--color-bg: #ffffff
--color-bg-card: #f5f5f5        /* карточки */
--color-bg-footer: #7b22d4
--color-text: #1a1a1a
--color-text-on-primary: #ffffff
--color-text-muted: #555555

--font-main   /* Montserrat */
--font-druk   /* Druk Wide Cyr — только заголовки */
```

## Breakpoints

```css
@media (max-width: 1024px)  /* desktop → tablet */
@media (max-width: 768px)   /* tablet → mobile */
@media (max-width: 480px)   /* мелкие телефоны */
@media (max-width: 400px)   /* очень мелкие */
@media (prefers-reduced-motion: reduce)  /* всегда добавлять */
```

## Border Radius

| Значение | Где |
|---|---|
| 4px | чекбоксы |
| 6px | icon-кнопки |
| 8px | инпуты, пагинация |
| 12px | карточки |
| 20px | pill-кнопки (Button) |
| 50px | CTA-кнопки (AboutSection) |

## Transitions

- `0.15s` — цвет, border, opacity (hover-эффекты)
- `0.3s cubic-bezier(0.4, 0, 0.2, 1)` — движение (Drawer, бургер)
- `0.4s cubic-bezier(0.4, 0, 0.2, 1)` — раскрытие (FAQ, панели)
- Всегда добавлять `@media (prefers-reduced-motion: reduce) { transition: none }`

---

## Компоненты

### Button

```tsx
// Полиморфный — рендерится как <button> или <Link>
<Button>Текст</Button>
<Button as="link" href="/search">Текст</Button>
<Button icon={<Icon />}>Текст</Button>
<Button className={styles.custom}>Текст</Button>
```

**Props:**
```typescript
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps
// as?: "button" | "link"
// icon?: ReactNode
// className?: string
// children?: ReactNode
// + все нативные атрибуты button или NextLink
```

**Стили по умолчанию:** flex, `--color-primary` фон, `--color-text-on-primary` текст, 8px 20px padding, 20px border-radius.  
Кастомизация — через `className`, переопределяй нужное.

---

### Checkbox

```tsx
<Checkbox
  label="Плавание"
  checked={value}
  onChange={(checked) => setValue(checked)}
/>
```

**Props:** `{ label, checked, onChange, className? }`  
**Стили:** 20px квадрат, фиолетовый при checked, focus-visible outline.

---

### TextInput

```tsx
// Инпут
<TextInput placeholder="Введите текст" value={v} onChange={...} />

// Textarea
<TextInput as="textarea" label="Отзыв" value={v} onChange={...} />

// С ошибкой
<TextInput error="Обязательное поле" value={v} onChange={...} />

// fieldClassName — стилизует сам <input>, className — враппер
<TextInput fieldClassName={styles.priceField} />
```

**Props:**
```typescript
// as?: "input" | "textarea"
// label?: string
// error?: string
// className?: string        — на обёртке <div>
// fieldClassName?: string   — на <input>/<textarea>
// + все нативные атрибуты input/textarea
```

---

### Rating

```tsx
// Только display, не интерактивный
<Rating value={4.4} />
<Rating value={4.4} reviewCount={159} />
<Rating value={4.4} reviewCount={159} className={styles.rating} />
```

**Props:** `{ value, reviewCount?, className? }`  
Рендерит: ⭐ 4.4 · 159 отзывов

---

### Drawer

```tsx
// Мобильный drawer — скрыт на десктопе (min-width: 769px)
// Блокирует scroll на body, закрывается по Escape и оверлею
<Drawer open={open} onClose={() => setOpen(false)} title="Фильтры">
  {/* любой контент */}
</Drawer>
```

**Props:** `{ open, onClose, title?, children }`  
**Анимация:** translateX(-100%) → 0, overlay opacity 0 → 0.4.  
**Важно:** `role="dialog"` + `aria-modal` — не использовать `<aside>`.

---

### Container

```tsx
<Container>{children}</Container>
```

Max-width 1280px, padding 50px (desktop), 40px (tablet).

---

## Паттерны

### Полиморфный компонент
Button и TextInput используют discriminated union + `omitProps` из `shared/lib/omitProps.ts`.  
Новые полиморфные компоненты — тот же паттерн.

### Список чекбоксов с показом ещё
```tsx
const VISIBLE = 6
const visible = showAll ? items : items.slice(0, VISIBLE)
// ...
{!showAll && items.length > VISIBLE && (
  <button onClick={() => setShowAll(true)}>
    Ещё {items.length - VISIBLE}
  </button>
)}
```

### Доступность
- `role="list"` на `<ul>` со списками опций
- `aria-hidden` на декоративных элементах
- `aria-label` на icon-кнопках
- `aria-expanded` + `aria-controls` на коллапсах
