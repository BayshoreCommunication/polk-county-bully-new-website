import Hero from "@/components/home/Hero";
import AdoptionSection from "@/components/home/AdoptionSection";
import EmbeddedSite from "@/components/home/EmbeddedSite";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <AdoptionSection />
      <EmbeddedSite />
      <Testimonials />
    </div>
  );
}
