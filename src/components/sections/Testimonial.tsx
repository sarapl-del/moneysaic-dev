export default function Testimonial() {
  return (
    <section className="border-t border-muted-border bg-subtle py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-9">
        <blockquote className="mb-6">
          <p className="text-2xl font-medium leading-snug text-dark md:text-3xl lg:text-[40px] lg:leading-[1.1]">
            "moneysaic team and ours have been acting as a single team — an
            integral part of Zumo's development."
          </p>
        </blockquote>
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand">
            <span className="text-sm font-medium text-white">NJ</span>
          </div>
          <div>
            <p className="text-sm font-medium text-dark">Nick Jones</p>
            <p className="font-mono text-[9px] font-medium uppercase tracking-widest text-dark/30">
              FOUNDER & CEO ZUMO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
