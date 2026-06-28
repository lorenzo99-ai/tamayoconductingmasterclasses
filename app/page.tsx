import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Scarcity from "@/components/Scarcity";
import Includes from "@/components/Includes";
import Schedule from "@/components/Schedule";
import Repertoire from "@/components/Repertoire";
import Maestro from "@/components/Maestro";
import Watch from "@/components/Watch";
import Soloist from "@/components/Soloist";
import Orchestra from "@/components/Orchestra";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-paper text-ink">
      <TopBar />
      <Nav />
      <Hero />
      <Scarcity />
      <Includes />
      <Schedule />
      <Repertoire />
      <Maestro />
      <Watch />
      <Soloist />
      <Orchestra />
      <Testimonials />
      <Gallery />
      <Pricing />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
