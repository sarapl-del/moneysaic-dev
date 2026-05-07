const steps = [
  {
    weeks: "Weeks 1–2",
    title: "Technical Alignment",
    description:
      "Map your API capabilities, agree the client's day-one scope, and confirm the integration architecture with both teams.",
  },
  {
    weeks: "Weeks 3–6",
    title: "Integration & Compliance",
    description:
      "We build natively on your infrastructure. Payments, KYC, and card rails integrated with no redundant middleware layer.",
  },
  {
    weeks: "Weeks 5–9",
    title: "Brand & UI Delivery",
    description:
      "A fully branded, client-specific interface built on our pre-engineered component library. Consistent. Compliant. Yours.",
  },
  {
    weeks: "Weeks 10–12 →",
    title: "Launch Readiness",
    description:
      "Full QA across payment flows, onboarding, and compliance checks. Your client goes live with a production-grade product.",
  },
];

export default function HowItWorks() {
  return (
    <section id="integration" className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:mb-24">
          <h2 className="max-w-[540px] text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            From signed contract to<br />working product in{" "}
            <span className="text-brand">8 weeks.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            We handle design, engineering, and help with the compliance. You focus on the product.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Horizontal line — desktop only, sits behind the badge row */}
            <div className="hidden md:block absolute left-0 right-0 top-[18px] h-px bg-gray-border" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
              {steps.map((step) => (
                <div key={step.weeks} className="md:pr-8">
                  <span className="relative mb-4 inline-block rounded-[3px] border border-gray-border bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest text-brand md:mb-8 md:text-sm">
                    {step.weeks}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-dark md:mb-5 md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-dark">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
