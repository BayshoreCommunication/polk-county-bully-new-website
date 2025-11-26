import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactPage from "@/components/contact/ContactPage";
import SimpleMap from "@/components/contact/SimpleMap";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Breadcrumb   
        title="Contact"
        links={[{ name: "Home", href: "/" }, { name: "Contact Us" }]}
        bgImage="/images/adoptionpage/breadcrumb/bg.png"
      />
      <ContactPage/>
      <SimpleMap/>
    </div>
  );
}