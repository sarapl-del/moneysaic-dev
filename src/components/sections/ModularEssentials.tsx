import React from "react";

const columns = [
  {
    icon: "/images/icon-204.svg",
    title: "Plug & Play Modules",
    description: "Essential fintech components that work out of the box",
  },
  {
    icon: "/images/icon-120.svg",
    title: "Smart integration",
    description: "Seamlessly combine modules with your unique features",
  },
  {
    icon: "/images/icon-033.svg",
    title: "Custom Innovation",
    description: "Tailored features that make your product unique",
  },
];

export default function ModularEssentials() {
  return (
    <section className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:mb-24">
          <h2 className="max-w-[420px] text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            Modular Essentials. <span className="text-brand">Custom Differentiators.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            Launch quickly with proven modules. Customize the unique elements that set<br />your fintech apart.
          </p>
        </div>

        {/* Columns */}
        <div className="grid divide-y divide-black md:grid-cols-3 md:gap-0 md:divide-y-0 md:divide-x md:divide-black">
          {columns.map((col, i) => (
            <div key={i} className={`flex flex-col items-start py-10 md:py-0 ${i > 0 ? "md:pl-12" : ""} ${i < columns.length - 1 ? "md:pr-12" : ""}`}>
              <div className="mb-14 flex w-full items-center justify-start md:justify-center">
                <img src={col.icon} alt="" className="object-contain" style={i === 0 ? { width: "186.12px", height: "160px" } : { width: "160px", height: "160px" }} />
              </div>
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
