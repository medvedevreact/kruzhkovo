"use client";

import { useEffect } from "react";
import clsx from "clsx";
import type { DrawerProps } from "./Drawer.types";
import styles from "./Drawer.module.css";

export function Drawer({ open, onClose, title, children }: DrawerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={clsx(styles.overlay, open && styles.overlayVisible)}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={clsx(styles.drawer, open && styles.drawerOpen)}
        aria-modal={open}
        aria-hidden={!open}
      >
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </aside>
    </>
  );
}
