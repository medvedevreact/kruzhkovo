import { Suspense } from "react";
import { Container } from "@/shared/ui/Container";
import { SearchResults } from "./components/SearchResults";
import styles from "./page.module.css";

export default function SearchPage() {
  return (
    <main className={styles.main}>
      <Container>
        <h1 className={styles.heading}>Поиск кружков и секций</h1>
        <Suspense>
          <SearchResults />
        </Suspense>
      </Container>
    </main>
  );
}
