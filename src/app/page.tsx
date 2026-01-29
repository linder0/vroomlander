import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioPreview />
      </main>
      <Footer />
    </>
  );
}
