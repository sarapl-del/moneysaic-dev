const columns = [
  {
    icon: "/images/icon-trust-sandbox.svg",
    title: "Rest API – webhooks",
    description:
      "Clean REST endpoints across every module with webhook support for real-time event streaming. No custom SDKs. No surprises.",
  },
  {
    icon: "/images/icon-trust-api.svg",
    title: "Full sandbox environment",
    description:
      "Mirror your full production environment before launch. Test edge cases, compliance flags, and payment flows without touching live data.",
  },
  {
    icon: "/images/icon-trust-compliance.svg",
    title: (
      <>
        ISO 27001 <span className="text-dark/30">·</span> GDPR{" "}
        <span className="text-dark/30">·</span> PSD2
      </>
    ),
    description:
      "Certifications are built into the platform architecture. Your audit trail is automatic — your compliance team doesn't need to chase it.",
  },
];

export default function Trust() {
  return (
    <section className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:mb-20">
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            Built for <span className="text-brand">regulated</span>
            <br />
            environments.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            Standard REST APIs, a full sandbox, and compliance certifications
            baked in — not bolted on.
          </p>
        </div>

        {/* Columns */}
        <div className="grid divide-y divide-black md:grid-cols-3 md:gap-0 md:divide-y-0 md:divide-x md:divide-black">
          {columns.map((col, i) => (
            <div key={i} className={`flex flex-col items-start py-10 md:py-0 ${i > 0 ? "md:pl-12" : ""} ${i < columns.length - 1 ? "md:pr-12" : ""}`}>
              {/* Icon */}
              <div className="mb-14 flex w-full items-center justify-start md:justify-center">
                <img src={col.icon} alt="" className="h-40 w-40 object-contain" />
              </div>
              {/* Text */}
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-dark md:text-2xl">
                {col.title}
              </h3>
              <p className="text-base leading-relaxed text-dark">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
