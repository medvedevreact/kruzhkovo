"use client";

import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useId, useState } from "react";

import styles from "./index.module.css";

export const Header = () => {
  const navId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.headerLogo}>
            <Image
              src="/brand-logo.png"
              alt="Кружково"
              width={32}
              height={32}
              className={styles.headerLogoImage}
            />
            <span className={styles.headerLogoText}>кружково</span>
          </div>
          <button
            type="button"
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls={navId}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span
              className={clsx(styles.burger, menuOpen && styles.burgerOpen)}
              aria-hidden
            >
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </span>
          </button>
          <nav
            id={navId}
            className={clsx(styles.headerNav, menuOpen && styles.headerNavOpen)}
          >
            <Button as="link" href="/" className={styles.headerNavLink} onClick={closeMenu}>
              Главная
            </Button>
            <Button
              as="link"
              href="/"
              className={styles.headerNavLink}
              onClick={closeMenu}
            >
              Категории
            </Button>
            <Button as="link" href="/" className={styles.headerNavLink} onClick={closeMenu}>
              Поиск
            </Button>
            <Button as="link" href="/" className={styles.headerNavLink} onClick={closeMenu}>
              Помощь AI
            </Button>
            <Button as="link" href="/" className={styles.headerNavLink} onClick={closeMenu}>
              Блог
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};
