import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone } from "lucide-react";

const modules = [
  {
    title: "From first tap to verified user.",
    subtitle: "Every entry flow comes pre-built, Sumsub integrated, and ready to brand as your own.",
    pills: ["Sign up", "Sign in", "Authentication & 2FA", "Biometrics", "KYC & Onboarding"],
    description: null,
    mobileImage: "/images/mockup-mobile-1.png",
    desktopImage: "/images/MockupDesktop1.png",
  },
  {
    title: "One app. Every flow they expect.",
    subtitle: <>Every flow your customers will actually use.<br />Pre-built and Pre-tested. Nothing bolted on after the fact.</>,
    pills: ["Account dashboard", "Payments UI", "Cards management UI", "Wallet & Ledger Interfaces", "Localisation"],
    nowrapPills: true,
    description: null,
    mobileImage: "/images/mockup-mobile-2.png",
    desktopImage: "/images/MockupDesktop2.png",
  },
  {
    title: "Everything behind the screen.",
    subtitle: <>The layer your users rarely think about until<br />something goes wrong. It works quietly and correctly from day one.</>,
    pills: ["Account settings", "Security controls", "Document access", "Notification preferences", "Open Banking and COP", "AML & transaction Monitoring"],
    nowrapPills: true,
    description: null,
    mobileImage: "/images/mockup-mobile-3.png",
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

          <div
            className="-mx-9"
            style={{
              backgroundImage: "url('/images/saicbg.svg')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <TabsContent value="mobile" className="space-y-16 px-8 py-12">
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
                    <img
                      src={mod.mobileImage}
                      alt={mod.title}
                      className="w-full max-w-4xl"
                    />
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="desktop" className="space-y-16 px-8 py-12">
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
                    <img
                      src={mod.desktopImage}
                      alt={mod.title}
                      className="w-full max-w-5xl"
                    />
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
