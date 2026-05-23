import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FaOdnoklassniki, FaTelegram, FaVk } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>
              <Image
                src="/brand-logo.png"
                alt="Кружково"
                width={24}
                height={24}
                className={styles.footerLogoImage}
              />
              <span className={styles.footerLogoText}>кружково</span>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.footerSocials}>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerSocialLink}
                >
                  <FaVk size={24} />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerSocialLink}
                >
                  <FaTelegram size={24} />
                </a>
                <a
                  href="https://ok.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerSocialLink}
                >
                  <FaOdnoklassniki size={24} />
                </a>
              </div>
              <p className={styles.footerCopy}>
                © 2025 кружки.ру. <br />
                Все права защищены.
              </p>
            </div>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.footerNavCol}>
              <Link href="#">Секции и кружки</Link>
              <Link href="#">Категории</Link>
              <Link href="#">Рейтинг</Link>
            </div>
            <div className={styles.footerNavCol}>
              <Link href="#">Карта секций</Link>
              <Link href="#">О сервисе</Link>
              <Link href="#">Акции</Link>
            </div>
            <div className={styles.footerNavCol}>
              <Link href="#">Блог</Link>
              <Link href="#">Вакансии</Link>
              <Link href="#">Контакты</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
