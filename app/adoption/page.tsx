import Breadcrumb from "@/components/shared/Breadcrumb";
import AdoptionSection from "@/components/adoption/AdoptionSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Breadcrumb
        title="Adoption"
        links={[{ name: "Home", href: "/" }, { name: "Adoption" }]}
        bgImage="/images/adoptionpage/breadcrumb/bg.png"
      />
      <AdoptionSection/>
    </div>
  );
}
