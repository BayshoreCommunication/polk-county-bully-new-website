import Hero from "@/components/home/Hero";
import AdoptionSection from "@/components/home/AdoptionSection";
import EmbeddedSite from "@/components/home/EmbeddedSite";
import Testimonials from "@/components/home/Testimonials";
import RescueSection from "@/components/home/RescueSection";
import SupportSection from "@/components/home/SupportSection";
import FosterSection from "@/components/home/FosterSection";
import VolunteerSection from "@/components/home/VolunteerSection";
import DonateSection from "@/components/home/DonateSection";
import SponsorSection from "@/components/home/SponsorSection";
import OurMerchandise from "@/components/home/OurMerchandise";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <AdoptionSection />
      <EmbeddedSite />
      <Testimonials />
      <RescueSection />
      <SupportSection />
      <FosterSection />
      <VolunteerSection />
      <DonateSection />
      <SponsorSection />
      <OurMerchandise />
      <CallToAction />
    </div>
  );
}
