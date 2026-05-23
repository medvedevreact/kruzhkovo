import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
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
          <nav className={styles.headerNav}>
            <Link href="/" className={styles.headerNavLink}>
              Главная
            </Link>
            <Link href="/categories" className={styles.headerNavLink}>
              Категории
            </Link>
            <Link href="/blog" className={styles.headerNavLink}>
              Блог
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};
