import { useRef, useState, useEffect } from "react";

const columns = [
  {
    icon: "/images/icon-111.svg",
    title: "Plug & Play Modules",
    description: "Essential fintech components that work out of the box",
  },
  {
    icon: "/images/icon-204.svg",
    title: "Smart integration",
    description: "Seamlessly combine modules with your unique features",
  },
  {
    icon: "/images/icon-033.svg",
    title: "Custom Innovation",
    description: "Tailored features that make your product unique",
  },
];

const EASING = "cubic-bezier(0.25, 1, 0.5, 1)";
const STAGGER_MS = 120;

// Line lengths (px in SVG user units):
//   L3 reversed (bottom, right→left): 63.08
//   L2 (bottom-left→top):             63.13
//   L1 (top→bottom-right):            65.31
//   total ≈ 191.52
// Delays at 2.5s cycle, so each line's dot enters exactly when the previous exits.
const LINE_DOT_ANIM = (delay: string) =>
  `icon-line-dot 5s linear ${delay} infinite backwards`;

export default function ModularEssentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [squareOut, setSquareOut] = useState(false);
  const [ringsHovered, setRingsHovered] = useState(false);
  const [ringsKey, setRingsKey] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:mb-24">
          <h2 className="max-w-[420px] text-3xl font-semibold leading-tight tracking-tight text-dark md:text-4xl">
            Modular Essentials. <span className="text-brand">Custom Differentiators.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-dark md:text-xl">
            Launch quickly with proven modules. Customize the unique elements that set<br />your fintech apart.
          </p>
        </div>

        <div className="grid divide-y divide-black md:grid-cols-3 md:gap-0 md:divide-y-0 md:divide-x md:divide-black">
          {columns.map((col, i) => (
            <div key={i} className={`flex flex-col items-start py-10 md:py-0 ${i > 0 ? "md:pl-12" : ""} ${i < columns.length - 1 ? "md:pr-12" : ""}`}>
              <div className="mb-14 flex w-full items-center justify-start md:justify-center">

                {i === 0 ? (
                  // Column 1: inline SVG, top-right square animates out on hover
                  <svg
                    width="186.12" height="160" viewBox="0 0 196 196"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible", cursor: "default" }}
                    onMouseEnter={() => setSquareOut(true)}
                    onMouseLeave={() => setSquareOut(false)}
                  >
                    <path d="M0.5 19.9736H88.133V107.607H0.5V19.9736Z" fill="white" stroke="black" strokeLinejoin="round" />
                    <path d="M0.5 107.607H88.133V195.24H0.5V107.607Z" fill="white" stroke="black" strokeLinejoin="round" />
                    <path d="M88.1328 107.607H175.766V195.24H88.1328V107.607Z" fill="white" stroke="black" strokeLinejoin="round" />
                    <path
                      d="M107.607 0.5H195.24V88.133H107.607V0.5Z"
                      fill="#F9F9F9" stroke="black" strokeLinejoin="round"
                      style={{
                        transition: `transform 350ms ${EASING}`,
                        transform: squareOut ? "translate(18px, -18px)" : "translate(0, 0)",
                      }}
                    />
                  </svg>

                ) : i === 1 ? (
                  // Column 2: inline SVG with continuously animated connecting lines
                  <div
                    className="transition-transform"
                    style={{ transitionDuration: "250ms", transitionTimingFunction: EASING }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <svg
                      width="160" height="160" viewBox="0 0 228 196"
                      fill="none" xmlns="http://www.w3.org/2000/svg"
                      className="icon-entrance"
                      style={{
                        animation: inView ? `icon-rise 600ms ${EASING} ${i * STAGGER_MS}ms both` : "none",
                        opacity: inView ? undefined : 0,
                      }}
                    >
                      {/* Squares */}
                      <rect x="0.589534" y="110.359" width="100.41" height="84.9198" fill="white" stroke="black" strokeWidth="1.17907" />
                      <rect x="126.814" y="110.359" width="100.41" height="84.9198" fill="white" stroke="black" strokeWidth="1.17907" />
                      <rect x="69.8513" y="0.589534" width="100.41" height="84.9198" fill="white" stroke="black" strokeWidth="1.17907" />
                      {/* Circles inside squares */}
                      <path fillRule="evenodd" clipRule="evenodd" d="M62.8557 152.819C62.8557 157.283 60.4306 161.18 56.8261 163.265C55.052 164.292 52.9923 164.879 50.7953 164.879C44.1345 164.879 38.7349 159.48 38.7349 152.819C38.7349 146.158 44.1345 140.758 50.7953 140.758C57.4561 140.758 62.8557 146.158 62.8557 152.819Z" fill="#F9F9F9" stroke="black" strokeWidth="1.17907" strokeLinejoin="round" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M189.079 152.819C189.079 157.283 186.654 161.18 183.05 163.265C181.276 164.292 179.216 164.879 177.019 164.879C170.358 164.879 164.958 159.48 164.958 152.819C164.958 146.158 170.358 140.758 177.019 140.758C183.68 140.758 189.079 146.158 189.079 152.819Z" fill="#F9F9F9" stroke="black" strokeWidth="1.17907" strokeLinejoin="round" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M132.117 43.0492C132.117 47.513 129.692 51.4104 126.088 53.4958C124.314 54.5222 122.254 55.1096 120.057 55.1096C113.396 55.1096 107.997 49.71 107.997 43.0492C107.997 36.3884 113.396 30.9888 120.057 30.9888C126.718 30.9888 132.117 36.3884 132.117 43.0492Z" fill="#F9F9F9" stroke="black" strokeWidth="1.17907" strokeLinejoin="round" />
                      {/* Connecting lines — traveling dot, clockwise: right→left bottom, left→top, top→right */}
                      {/* Bottom line REVERSED so dot travels right→left */}
                      <line x1="164.668" y1="152.234" x2="101.589" y2="152.234" stroke="black" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("0s") }} />
                      {/* Left→top (delay: 63.08/191.52*5 ≈ 1.65s) */}
                      <line x1="55.5229" y1="141.299" x2="85.6373" y2="85.8171" stroke="black" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("1.65s") }} />
                      {/* Top→right-bottom (delay: 126.21/191.52*5 ≈ 3.29s) */}
                      <line x1="126.583" y1="53.4981" x2="159.034" y2="110.173" stroke="black" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("3.29s") }} />
                    </svg>
                  </div>

                ) : (
                  // Column 3: counter-rotating orbital rings on hover
                  <svg
                    width="160" height="160" viewBox="0 0 196 196"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "default" }}
                    onMouseEnter={() => setRingsHovered(true)}
                    onMouseLeave={() => { setRingsHovered(false); setRingsKey(k => k + 1); }}
                  >
                    <circle cx="97.87" cy="97.87" r="97.37" fill="white" stroke="black" strokeLinejoin="round" />
                    <ellipse
                      key={`cw-${ringsKey}`}
                      cx="97.87" cy="97.8702" rx="97.37" ry="30.3794"
                      fill="#F9F9F9" stroke="black" strokeLinejoin="round"
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        animation: "spin-cw 3s linear infinite",
                        animationPlayState: ringsHovered ? "running" : "paused",
                      }}
                    />
                    <ellipse
                      key={`ccw-${ringsKey}`}
                      cx="97.8701" cy="97.87" rx="97.37" ry="30.3794"
                      stroke="black" strokeLinejoin="round"
                      style={{
                        transformBox: "fill-box",
                        transformOrigin: "center",
                        animation: "spin-ccw-90 3s linear infinite",
                        animationPlayState: ringsHovered ? "running" : "paused",
                      }}
                    />
                  </svg>
                )}

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
