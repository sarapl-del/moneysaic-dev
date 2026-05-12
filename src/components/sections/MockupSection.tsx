export default function MockupSection() {
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
            <img
              src="/images/Mockup Green.png"
              alt="Desktop application dashboard"
              className="w-full max-w-5xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
