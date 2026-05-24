// Удаляет указанные ключи из объекта
export function omitProps<
  const T extends object,
  const K extends readonly (keyof T)[],
>(obj: T, keys: K): Omit<T, K[number]> {
  const next = { ...obj };
  for (const key of keys) delete next[key];
  return next;
}
