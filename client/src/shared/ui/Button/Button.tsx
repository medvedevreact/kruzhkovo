import clsx from "clsx";
import Link from "next/link";

import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";
import { omitProps } from "./lib/omitProps";

export function Button(props: ButtonProps) {
  const mergedClassName = clsx(styles.root, props.className);

  const content = (
    <>
      {props.icon ? (
        <span className={styles.icon} aria-hidden>
          {props.icon}
        </span>
      ) : null}
      {props.children}
    </>
  );

  if (props.as === "link") {
    return (
      <Link
        {...omitProps(props, ["as", "icon", "className", "children"])}
        className={mergedClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...omitProps(props, ["as", "icon", "className", "children", "type"])}
      type={props.type ?? "button"}
      className={mergedClassName}
    >
      {content}
    </button>
  );
}
