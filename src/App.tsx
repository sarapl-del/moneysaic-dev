import { useEffect } from "react";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ProductDetail from "@/components/sections/ProductDetail";
import Testimonial from "@/components/sections/Testimonial";
import HowItWorks from "@/components/sections/HowItWorks";
import ModularEssentials from "@/components/sections/ModularEssentials";
import MockupSection from "@/components/sections/MockupSection";
import Trust from "@/components/sections/Trust";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductDetail />
        <Testimonial />
        <MockupSection />
        <ModularEssentials />
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
