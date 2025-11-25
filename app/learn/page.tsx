import Breadcrumb from "@/components/shared/Breadcrumb";
import PitInfo from "@/components/learn/PitInfo";
import PitBullInfo from "@/components/learn/PitBullInfo";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Breadcrumb   
        title="Learn"
        links={[{ name: "Home", href: "/" }, { name: "Learn" }]}
        bgImage="/images/adoptionpage/breadcrumb/bg.png"
      />
      <PitInfo/>
      <PitBullInfo/>
    </div>
  );
}