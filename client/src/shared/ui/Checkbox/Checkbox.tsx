import clsx from "clsx";
import type { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.css";

export function Checkbox({ label, checked, onChange, className }: CheckboxProps) {
  return (
    <label className={clsx(styles.root, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.box} aria-hidden />
      <span className={styles.label}>{label}</span>
    </label>
  );
}
