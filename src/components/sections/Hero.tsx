import { Button } from "@/components/ui/button";

const logos = [
  { src: "/images/logo-integrated-finance.svg", alt: "Integrated Finance", className: "h-7" },
  { src: "/images/logo-griffin.svg", alt: "Griffin", className: "h-5" },
  { src: "/images/logo-sumsub.svg", alt: "Sumsub", className: "h-6" },
  { src: "/images/logo-thredd.svg", alt: "Thredd", className: "h-5" },
  { src: "/images/logo-currencycloud.svg", alt: "Currencycloud", className: "h-10" },
];

// Hero load-in: nav/heading/background are visible immediately at t=0.
// Subhead, CTA, and logo bar then fade up with a tight 150ms stagger so they cross-fade smoothly.
const SUBHEAD_DELAY_MS = 250;
const CTA_DELAY_MS = 400;
const LOGOS_DELAY_MS = 550;

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center"
      style={{
        background:
          "linear-gradient(168deg, #fff 4%, #ece8ff 35%, #fcfcfd 81%)",
      }}
    >
      {/* Content */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-9 pt-24 pb-16 text-center md:pt-32 md:pb-20">
        <h1 className="max-w-[580px] text-4xl font-bold leading-[1.1] tracking-tight text-dark md:text-5xl">
          The product layer{" "}
          <span className="text-brand">for regulated finance.</span>
        </h1>

        <p
          className="hero-fade-up max-w-[640px] text-base leading-relaxed text-dark md:text-lg"
          style={{ animationDelay: `${SUBHEAD_DELAY_MS}ms` }}
        >
          A modular kit for banks, business units, and embeded finance teams
          launching digital products. Branded as yours.{" "}
          <span className="whitespace-nowrap">Compliance-ready.</span> Live in
          12 weeks, on top of your existing rails.
        </p>

        <a
          href="https://calendly.com/doug-barr-dlabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-fade-up"
          style={{ animationDelay: `${CTA_DELAY_MS}ms` }}
        >
          <Button className="h-12 rounded-[7px] bg-brand px-8 py-5 text-base font-normal text-white hover:bg-brand/90">
            Book a meeting with our team →
          </Button>
        </a>
      </div>

      {/* Logo bar */}
      <div
        className="hero-fade-up w-full border-t border-muted-border"
        style={{ animationDelay: `${LOGOS_DELAY_MS}ms` }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-9 py-6 md:flex-row md:justify-center md:gap-20">
          <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            our ecosystem parterships
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
