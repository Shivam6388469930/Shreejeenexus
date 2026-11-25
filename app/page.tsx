
import AboutImage from "@/components/About";
import ShreejeenaxusCategorySlider from "@/components/CatehorySlider";
import ShreejeenaxusServices from "@/components/Ecosystem";
import ShreejeenaxusFAQ from "@/components/FAQ";
import ShreejeenaxusHeros from "@/components/ShreejeeHero";
import ShreejeenaxusHero from "@/components/ShreejeenaxusHero";
import ShreejeenaxusSections from "@/components/ShreejeenaxusSections";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Primary Hero */}
      <ShreejeenaxusHero />

      {/* Secondary / Video Hero */}
      <ShreejeenaxusHeros />

      {/* About */}
      <AboutImage />

      {/* Category / Portfolio Slider */}
      <ShreejeenaxusCategorySlider />

      {/* Services / Ecosystem */}
      <ShreejeenaxusServices />

      {/* Why Choose Us / Industries / Process / Testimonials */}
      <ShreejeenaxusSections />

      {/* FAQ */}
      <ShreejeenaxusFAQ />
    </main>
  );
}
