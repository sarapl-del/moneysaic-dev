import { Button } from "@/components/ui/button";

const logos = [
  { src: "/images/logo-integrated-finance.svg", alt: "Integrated Finance", className: "h-7" },
  { src: "/images/logo-griffin.svg", alt: "Griffin", className: "h-5" },
  { src: "/images/logo-sumsub.svg", alt: "Sumsub", className: "h-6" },
  { src: "/images/logo-thredd.svg", alt: "Thredd", className: "h-5" },
  { src: "/images/logo-currencycloud.svg", alt: "Currencycloud", className: "h-10" },
];

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
          Launch a compliant fintech product.{" "}
          <span className="text-brand">Without building it from scratch.</span>
        </h1>

        <p className="max-w-[560px] text-base leading-relaxed text-dark md:text-lg">
          moneysaic gives{" "}
          <strong>fintech founders and digital banking teams</strong> a fully
          designed, compliance-ready module stack — branded as your own and live
          in weeks, not months.
        </p>

        <a href="https://calendly.com/doug-barr-dlabs/30min" target="_blank" rel="noopener noreferrer">
          <Button className="h-12 rounded-[7px] bg-brand px-8 py-5 text-base font-normal text-white hover:bg-brand/90">
            Book a 30-min Call →
          </Button>
        </a>
      </div>

      {/* Logo bar */}
      <div className="w-full border-t border-muted-border">
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
