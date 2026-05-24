import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";

import { AboutSection } from "./components/AboutSection";
import { FaqSection } from "./components/FaqSection";
import { WhySection } from "./components/WhySection";

export default function Home() {
  return (
    <>
      <Header />

      <AboutSection />
      <WhySection />
      <FaqSection />

      <Footer />
    </>
  );
}
