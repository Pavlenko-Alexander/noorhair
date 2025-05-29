import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
const targetDate = new Date(new Date().getTime() + 6 * 60 * 60 * 1000);
  return (
    <>
      <Header logoSrc="/logo.webp" targetDate={targetDate} />
      <main>
        <HeroSection
          productImageUrl="/product-image.webp"
          ctaLink="https://noorhairoffers.com/skin-cream/offers"
        />
      </main>
    </>
  );
}
