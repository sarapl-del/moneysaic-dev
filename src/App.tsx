import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ProductDetail from "@/components/sections/ProductDetail";
import Testimonial from "@/components/sections/Testimonial";
import HowItWorks from "@/components/sections/HowItWorks";
import ModularEssentials from "@/components/sections/ModularEssentials";
import MockupSection from "@/components/sections/MockupSection";
import Value from "@/components/sections/Value";
import Trust from "@/components/sections/Trust";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductDetail />
        <Testimonial />
        <MockupSection />
        <ModularEssentials />
        <Value />
        <Testimonial />
        <HowItWorks />
        <Testimonial />
        <Trust />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
