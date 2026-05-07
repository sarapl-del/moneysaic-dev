const items = [
  {
    title: "Comprehensive Fintech Services",
    description:
      "From market research and prototyping to BaaS integrations, KYC compliance, and security infrastructure — we deliver an end-to-end service that covers every layer of your fintech product. We run product workshops to define requirements and deliver a fully built, regulation-ready application tailored to your business.",
    icon: "/images/icon-value-192.svg",
  },
  {
    title: "Beyond Development — Full Venture Support",
    description:
      "We don't stop at launch. From brand identity and market entry strategy to regulatory navigation and investor connections, we support the full arc of your venture. Our team brings strategic coaching and funding guidance so your product scales as confidently as it launches.",
    icon: "/images/icon-value-100.svg",
  },
  {
    title: "Agile Execution for Rapid Results",
    description:
      "Pre-assembled expert teams, lean delivery frameworks, and continuous user testing — built to move fast without cutting corners. Every feature is validated against real user feedback before it ships, so your product reaches the market fit-for-purpose and ready to grow.",
    icon: "/images/icon-value-167.svg",
  },
];

export default function Value() {
  return (
    <section className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:mb-16">
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            Closing the (<em className="font-extralight">some-words</em>) gap by
            making the builders and the technology the same entity.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            We help you navigate the complexities of fintech development with
            agility and precision, ensuring your product is not only
            market-ready but also primed for large-scale customer adoption.
          </p>
        </div>

        {/* Value rows */}
        <div className="-mx-9 relative px-9">
          {/* Background — tablet and desktop only */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: "url('/images/value-bg.svg')",
              backgroundSize: "1440px 795px",
              backgroundRepeat: "no-repeat",
            }}
          />

          {items.map((item) => (
            <div
              key={item.title}
              className="relative z-10 flex flex-col py-10 md:grid md:grid-cols-[71.875%_28.125%] md:items-center md:py-12"
            >
              <div className="max-w-2xl order-2 md:order-1">
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-dark md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-dark">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-start md:justify-center order-1 md:order-2 mb-6 md:mb-0">
                <img
                  src={item.icon}
                  alt=""
                  className="h-28 w-28 md:h-32 md:w-32"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
