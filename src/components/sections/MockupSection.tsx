import { useState } from "react";

const STAGES = [
  {
    src: "/images/Mockup Green.png",
    dot: { left: "5.7%", top: "38%" } as const,
  },
  {
    src: "/images/Branded Mockup2.png",
    dot: { left: "30%", top: "36%" } as const,
  },
  {
    src: "/images/Branded Mockup3.png",
    dot: { left: "17%", top: "21%" } as const,
  },
] as const;

export default function MockupSection() {
  const [stage, setStage] = useState(0);
  const current = STAGES[stage];
  const nextLabel =
    stage === STAGES.length - 1 ? "Restart mockup tour" : "Show next view";

  return (
    <section className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:mb-24">
          <h2 className="max-w-[420px] text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            One platform,<br /><span className="text-brand">unique branding.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            Launch quickly with proven modules. Customize the unique elements that set<br />your fintech apart.
          </p>
        </div>

        {/* Desktop mockup */}
        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            backgroundImage: "url('/images/mockup-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-center p-8 md:p-16">
            <button
              type="button"
              onClick={() => setStage((s) => (s + 1) % STAGES.length)}
              aria-label={nextLabel}
              className="group relative block w-full max-w-5xl cursor-pointer appearance-none border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
              style={{ aspectRatio: "2968 / 1871" }}
            >
              <img
                src={current.src}
                alt="Desktop application dashboard"
                className="block h-full w-full object-contain"
              />
              {current.dot && (
                <span
                  aria-hidden
                  className="mockup-pulse-dot pointer-events-none absolute"
                  style={current.dot}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
