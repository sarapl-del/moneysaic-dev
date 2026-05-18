import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone } from "lucide-react";

// Mobile-only: horizontal scroll-snap carousel. Each image takes 80% width; the
// 10% inline padding lets the first/last image snap-center cleanly, and adjacent
// images peek behind a -10% margin so it reads as a stack rather than a strip.
function KycMockupCarousel({ images, title }: { images: string[]; title: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(el.children).forEach((child, i) => {
          const c = child as HTMLElement;
          const cCenter = c.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(center - cCenter);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActiveIdx(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto px-[10%]"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`flex-none w-[80%] snap-center ${idx > 0 ? "-ml-[10%]" : ""}`}
            style={{ zIndex: images.length - idx }}
          >
            <img
              src={img}
              alt={`${title} step ${idx + 1}`}
              className="block w-full"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            aria-hidden
            className={`block h-2 rounded-full transition-all duration-300 ${
              idx === activeIdx ? "w-6 bg-dark" : "w-2 bg-dark/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function KycMockupStack({ images, title, maxWidth = "78rem" }: { images: string[]; title: string; maxWidth?: string }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <>
      {/* Mobile viewport: scrollable carousel with dots */}
      <div className="w-full md:hidden">
        <KycMockupCarousel images={images} title={title} />
      </div>

      {/* Tablet/Desktop: existing tap-to-scale stack — unchanged */}
      <div
        className="hidden w-full items-center justify-center px-[4%] py-[7%] md:flex"
        style={{ maxWidth }}
      >
        {images.map((img, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(isActive ? null : idx)}
              aria-pressed={isActive}
              aria-label={`${title} step ${idx + 1}`}
              className={`relative min-w-0 flex-1 cursor-pointer appearance-none border-0 bg-transparent p-0 transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 motion-reduce:transition-none ${
                idx > 0 ? "-ml-8" : ""
              } ${isActive ? "scale-[1.35]" : ""}`}
              style={{
                zIndex: isActive ? 60 : images.length - idx,
                transformOrigin: "center center",
              }}
            >
              <img src={img} alt="" className="block w-full" />
            </button>
          );
        })}
      </div>
    </>
  );
}

const modules = [
  {
    title: "From first tap to verified user.",
    subtitle: "Every entry flow comes pre-built, Sumsub integrated, and ready to brand as your own.",
    pills: ["Sign up", "Sign in", "Authentication & 2FA", "Biometrics", "KYC & Onboarding"],
    description: null,
    mobileImages: [
      "/images/KYC - List - Empty.png",
      "/images/KYC - Steps -  Personal information.png",
      "/images/KYC - Steps -  Verify identity.png",
      "/images/KYC - Steps -  Verify identity - Scan document.png",
      "/images/KYC - Completed.png",
    ],
    mobileImage: "/images/mockup-mobile-1.png",
    desktopImages: [
      "/images/Desktop_KYC - List - Empty.png",
      "/images/Desktop_KYC - Steps -  Verify identity - Scan document.png",
    ],
    desktopImage: "/images/MockupDesktop1.png",
  },
  {
    title: "One app. Every flow they expect.",
    subtitle: <>Every flow your customers will actually use.<br />Pre-built and Pre-tested. Nothing bolted on after the fact.</>,
    pills: ["Account dashboard", "Payments UI", "Cards management UI", "Wallet & Ledger Interfaces", "Localisation"],
    nowrapPills: true,
    description: null,
    mobileImages: [
      "/images/Display Screen1.png",
      "/images/Display Screen2.png",
      "/images/Display Screen3.png",
      "/images/Display Screen4.png",
      "/images/Display Screen5.png",
    ],
    mobileImage: "/images/mockup-mobile-2.png",
    desktopImages: [
      "/images/Dashboard - Full.png",
      "/images/Cards - Card details - New card.png",
    ],
    desktopImage: "/images/MockupDesktop2.png",
  },
  {
    title: "Everything behind the screen.",
    subtitle: <>The layer your users rarely think about until<br />something goes wrong. It works quietly and correctly from day one.</>,
    pills: ["Account settings", "Security controls", "Document access", "Notification preferences", "Open Banking and COP", "AML & transaction Monitoring"],
    nowrapPills: true,
    description: null,
    mobileImages: [
      "/images/Display Screen6.png",
      "/images/Display Screen7.png",
      "/images/Display Screen8.png",
      "/images/Display Screen9.png",
      "/images/Display Screen10.png",
    ],
    mobileImage: "/images/mockup-mobile-3.png",
    desktopImages: [
      "/images/Profile - KYC1.png",
      "/images/Profile - KYC2.png",
    ],
    desktopImage: "/images/MockupDesktop3.png",
  },
];

export default function ProductDetail() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-[485px] text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            One suite. Every module{" "}
            <span className="text-brand">ready to brand and ship.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            Each module is fully designed, compliance-ready, and yours to brand.
            Pick what you need. Skip what you don't.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-auto bg-transparent gap-3">
            <TabsTrigger
              value="mobile"
              className="flex items-center justify-center gap-2 rounded-[3px] border border-gray-border bg-white px-4 py-2 font-mono text-sm font-medium uppercase tracking-widest text-dark data-[active]:border-brand data-[active]:bg-brand-light data-[active]:text-brand"
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="desktop"
              className="flex items-center justify-center gap-2 rounded-[3px] border border-gray-border bg-white px-4 py-2 font-mono text-sm font-medium uppercase tracking-widest text-dark data-[active]:border-brand data-[active]:bg-brand-light data-[active]:text-brand"
            >
              <Monitor className="h-4 w-4" />
              Desktop
            </TabsTrigger>
          </TabsList>

          <div className="-mx-9">
            <TabsContent
              value="mobile"
              className="space-y-16 px-8 py-12"
              style={{
                backgroundImage: "url('/images/saicbg.svg')",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 -56px",
              }}
            >
              {modules.map((mod, i) => (
                <div key={i}>
                  <div className={`mb-8 pl-0 md:pl-6 lg:pl-10 ${"nowrapPills" in mod && mod.nowrapPills ? "max-w-5xl" : "max-w-2xl"}`}>
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-dark md:text-2xl">
                      {mod.title}{"subtitle" in mod && mod.subtitle && (
                        <>{" "}<span className="text-dark/40">{mod.subtitle}</span></>
                      )}
                    </h3>
                    {"pills" in mod && mod.pills && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {mod.pills.map((pill) => (
                          <span key={pill} className="w-fit whitespace-nowrap rounded-[3px] border border-gray-border bg-white px-3 py-2 text-sm leading-[16px] text-dark">
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                    {mod.description && (
                      <p className="mt-3 text-base leading-relaxed text-dark">
                        {mod.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {"mobileImages" in mod && mod.mobileImages ? (
                      <KycMockupStack images={mod.mobileImages} title={mod.title} />
                    ) : (
                      <img
                        src={mod.mobileImage}
                        alt={mod.title}
                        className="w-full max-w-6xl"
                      />
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent
              value="desktop"
              className="space-y-16 px-8 py-12"
              style={{
                backgroundImage: "url('/images/saicbg.svg')",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 -56px",
              }}
            >
              {modules.map((mod, i) => (
                <div key={i}>
                  <div className={`mb-8 pl-0 md:pl-6 lg:pl-10 ${"nowrapPills" in mod && mod.nowrapPills ? "max-w-5xl" : "max-w-2xl"}`}>
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-dark md:text-2xl">
                      {mod.title}{"subtitle" in mod && mod.subtitle && (
                        <>{" "}<span className="text-dark/40">{mod.subtitle}</span></>
                      )}
                    </h3>
                    {"pills" in mod && mod.pills && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {mod.pills.map((pill) => (
                          <span key={pill} className="w-fit whitespace-nowrap rounded-[3px] border border-gray-border bg-white px-3 py-2 text-sm leading-[16px] text-dark">
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                    {mod.description && (
                      <p className="mt-3 text-base leading-relaxed text-dark">
                        {mod.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {"desktopImages" in mod && mod.desktopImages ? (
                      <KycMockupStack images={mod.desktopImages} title={mod.title} maxWidth="90rem" />
                    ) : (
                      <img
                        src={mod.desktopImage}
                        alt={mod.title}
                        className="w-full max-w-7xl"
                      />
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
