import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const llmLinks = [
  { name: "ask chatgpt", icon: "/images/logo-chatgpt.png" },
  { name: "ask gemini", icon: "/images/logo-gemini.png" },
  { name: "ask claude", icon: "/images/logo-claude.png" },
  { name: "ask perplexity", icon: "/images/logo-perplexity.png" },
];

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(168deg, #fff 4%, #ece8ff 35%, #fcfcfd 81%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-9 py-20 md:py-28">
        {/* Main CTA */}
        <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center md:mb-28">
          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl lg:leading-[70px]">
            Let's find out if moneysaic is{" "}
            <span className="text-brand">the right fit.</span>
          </h2>
          <p className="mb-10 max-w-lg text-lg font-normal leading-[29px] text-dark md:text-xl">
            Book a 30-minute call with an expert. We'll cover your product
            goals, which modules apply, and a realistic launch timeline — no
            sales theatre.
          </p>
          <a href="https://calendly.com/doug-barr-dlabs/30min" target="_blank" rel="noopener noreferrer">
            <Button className="h-12 rounded-[7px] bg-brand px-6 py-4 text-base font-normal text-white hover:bg-brand/90">
              Book a 30-min Call →
            </Button>
          </a>
        </div>

        {/* LLM links */}
        <div className="border-t border-gray-border pt-5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Text — left */}
            <div className="flex flex-col gap-2">
              <p className="text-lg font-medium text-dark md:text-xl">
                Still wondering?
              </p>
              <p className="text-base text-dark">
                See what your favourite LLM has to say about us.
              </p>
            </div>
            {/* Buttons — row on desktop, stacked full-width on mobile */}
            <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap lg:flex-nowrap">
              {llmLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="flex w-full items-center justify-between rounded-[3px] border border-gray-border bg-white px-4 py-2 transition-colors hover:border-brand sm:w-[240px]"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={link.icon}
                      alt=""
                      className="h-5 w-5 rounded-sm object-cover"
                    />
                    <span className="font-mono text-sm font-medium uppercase tracking-widest text-dark">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-dark" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
