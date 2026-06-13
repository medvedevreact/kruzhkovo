import clsx from "clsx";
import type { TextInputProps } from "./TextInput.types";
import { omitProps } from "@/shared/lib/omitProps";
import styles from "./TextInput.module.css";

export function TextInput(props: TextInputProps) {
  const { label, error, className, fieldClassName } = props;

  const rootClass = clsx(styles.root, className);
  const fieldClass = clsx(styles.field, error && styles.fieldError, fieldClassName);

  if (props.as === "textarea") {
    const rest = omitProps(props, ["as", "label", "error", "className", "fieldClassName"]);
    return (
      <div className={rootClass}>
        {label && <label className={styles.label}>{label}</label>}
        <textarea {...rest} className={fieldClass} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }

  const rest = omitProps(props, ["as", "label", "error", "className", "fieldClassName"]);
  return (
    <div className={rootClass}>
      {label && <label className={styles.label}>{label}</label>}
      <input {...rest} className={fieldClass} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
