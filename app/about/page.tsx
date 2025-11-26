import Breadcrumb from "@/components/shared/Breadcrumb";
import BullyProjectSection from "@/components/about/BullyProjectSection";
import ImpactSection from "@/components/about/ImpactSection";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Breadcrumb   
        title="About Us"
        links={[{ name: "Home", href: "/" }, { name: "About Us" }]}
        bgImage="/images/adoptionpage/breadcrumb/bg.png"
      />
      <BullyProjectSection/>
      <ImpactSection/>
      <Testimonials/>
    </div>
  );
}