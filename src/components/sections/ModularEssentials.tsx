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
  `icon-line-dot 8s linear ${delay} infinite backwards`;

export default function ModularEssentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

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
                  // Column 1: 4 squares rotate clockwise — one is "outside" at any time.
                  // TR starts OUT (negative delay), then TR → BR → BL → TL → TR, etc.
                  <svg
                    width="186.12" height="160" viewBox="0 0 196 196"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible" }}
                  >
                    {/* TL — outside offset is up-left, OUT-held at t=5–6s */}
                    <path d="M0.5 19.9736H88.133V107.607H0.5V19.9736Z"
                      fill="white" stroke="black" strokeLinejoin="round"
                      className="icon-square-cycle"
                      style={{ animationDelay: "4s", "--out-x": "-19.474px", "--out-y": "-19.474px" } as React.CSSProperties} />
                    {/* BL — outside offset is down-left, OUT-held at t=3–4s */}
                    <path d="M0.5 107.607H88.133V195.24H0.5V107.607Z"
                      fill="white" stroke="black" strokeLinejoin="round"
                      className="icon-square-cycle"
                      style={{ animationDelay: "2s", "--out-x": "-19.474px", "--out-y": "19.474px" } as React.CSSProperties} />
                    {/* BR — outside offset is down-right, OUT-held at t=1–2s */}
                    <path d="M88.1328 107.607H175.766V195.24H88.1328V107.607Z"
                      fill="white" stroke="black" strokeLinejoin="round"
                      className="icon-square-cycle"
                      style={{ animationDelay: "0s", "--out-x": "19.474px", "--out-y": "19.474px" } as React.CSSProperties} />
                    {/* TR — joined position; negative delay so it starts already at OUT */}
                    <path d="M88.1328 19.9736H175.766V107.607H88.1328V19.9736Z"
                      fill="#F9F9F9" stroke="black" strokeLinejoin="round"
                      className="icon-square-cycle"
                      style={{ animationDelay: "-2s", "--out-x": "19.474px", "--out-y": "-19.474px" } as React.CSSProperties} />
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
                      {/* Circles inside squares — flash purple when dot arrives.
                          Delays match arrival times in the 8s line-dot cycle. */}
                      {/* BL — line 1 (bottom right→left) arrives at ~2.63s */}
                      <path fillRule="evenodd" clipRule="evenodd" d="M62.8557 152.819C62.8557 157.283 60.4306 161.18 56.8261 163.265C55.052 164.292 52.9923 164.879 50.7953 164.879C44.1345 164.879 38.7349 159.48 38.7349 152.819C38.7349 146.158 44.1345 140.758 50.7953 140.758C57.4561 140.758 62.8557 146.158 62.8557 152.819Z" fill="#F9F9F9" stroke="black" strokeWidth="1.17907" strokeLinejoin="round"
                        className="icon-circle-flash"
                        style={{ animationDelay: "2.63s" }} />
                      {/* BR — line 3 (top→right-bottom) arrives at ~7.9s */}
                      <path fillRule="evenodd" clipRule="evenodd" d="M189.079 152.819C189.079 157.283 186.654 161.18 183.05 163.265C181.276 164.292 179.216 164.879 177.019 164.879C170.358 164.879 164.958 159.48 164.958 152.819C164.958 146.158 170.358 140.758 177.019 140.758C183.68 140.758 189.079 146.158 189.079 152.819Z" fill="#F9F9F9" stroke="black" strokeWidth="1.17907" strokeLinejoin="round"
                        className="icon-circle-flash"
                        style={{ animationDelay: "7.9s" }} />
                      {/* TOP — line 2 (left→top) arrives at ~5.27s */}
                      <path fillRule="evenodd" clipRule="evenodd" d="M132.117 43.0492C132.117 47.513 129.692 51.4104 126.088 53.4958C124.314 54.5222 122.254 55.1096 120.057 55.1096C113.396 55.1096 107.997 49.71 107.997 43.0492C107.997 36.3884 113.396 30.9888 120.057 30.9888C126.718 30.9888 132.117 36.3884 132.117 43.0492Z" fill="#F9F9F9" stroke="black" strokeWidth="1.17907" strokeLinejoin="round"
                        className="icon-circle-flash"
                        style={{ animationDelay: "5.27s" }} />
                      {/* Connecting lines — traveling dot, clockwise: right→left bottom, left→top, top→right */}
                      {/* Bottom line REVERSED so dot travels right→left */}
                      <line x1="164.668" y1="152.234" x2="101.589" y2="152.234" stroke="#5533ff" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("0s") }} />
                      {/* Left→top (delay: 63.08/191.52*8 ≈ 2.63s) */}
                      <line x1="55.5229" y1="141.299" x2="85.6373" y2="85.8171" stroke="#5533ff" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("2.63s") }} />
                      {/* Top→right-bottom (delay: 126.21/191.52*8 ≈ 5.27s) */}
                      <line x1="126.583" y1="53.4981" x2="159.034" y2="110.173" stroke="#5533ff" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("5.27s") }} />
                    </svg>
                  </div>

                ) : (
                  // Column 3: node-graph icon (#173) — each line breathes long↔short while its dot
                  // tracks the visible outer end. Center junction (76.4158, 112.818) stays fixed.
                  <svg
                    width="160" height="160" viewBox="0 0 196 195"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: "visible", display: "block" }}
                  >
                    {/* Lines — pathLength="100", inner endpoint at center never moves */}
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="121.145" y2="93.5575" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "11s", animationDelay: "0s" } as React.CSSProperties} />
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="151.792" y2="34.3818" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "13s", animationDelay: "1.5s" } as React.CSSProperties} />
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="70.6782" y2="57.4198" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "10s", animationDelay: "3.2s" } as React.CSSProperties} />
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="177.975" y2="167.018" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "14s", animationDelay: "0.7s" } as React.CSSProperties} />
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="20.4717" y2="108.051" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "12s", animationDelay: "2.4s" } as React.CSSProperties} />
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="90.6645" y2="142.459" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "9s", animationDelay: "4.3s" } as React.CSSProperties} />
                    <line className="graph-line" x1="76.4158" y1="112.818" x2="15.5314" y2="30.1396" stroke="#111111" strokeLinejoin="round" pathLength="100"
                      style={{ animationDuration: "15s", animationDelay: "1.1s" } as React.CSSProperties} />

                    {/* Dots — each shares its line's duration+delay, translates inward by
                        20% of the line's direction toward the center to stay glued to the visible end */}
                    {/* Dot for line 2 → endpoint (151.792, 34.3818) */}
                    <path d="M167.534 26.8542C167.534 32.175 163.195 36.4883 157.842 36.4883C155.553 36.4883 153.45 35.7001 151.792 34.3818C149.571 32.6164 148.149 29.9004 148.149 26.8542C148.149 21.5334 152.489 17.2201 157.842 17.2201C163.195 17.2201 167.534 21.5334 167.534 26.8542Z" fill="white" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "13s", animationDelay: "1.5s", "--peak-x": "-15.08px", "--peak-y": "15.69px" } as React.CSSProperties} />
                    {/* Dot for line 1 → endpoint (121.145, 93.5575) */}
                    <path d="M139.258 88.7829C139.258 94.1036 134.918 98.417 129.565 98.417C125.96 98.417 122.814 96.4605 121.145 93.5575C120.335 92.1501 119.872 90.5202 119.872 88.7829C119.872 83.4621 124.212 79.1488 129.565 79.1488C134.918 79.1488 139.258 83.4621 139.258 88.7829Z" fill="#5533FF" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "11s", animationDelay: "0s", "--peak-x": "-8.95px", "--peak-y": "3.85px" } as React.CSSProperties} />
                    {/* Dot for line 4 → endpoint (177.975, 167.018) */}
                    <path d="M195.24 173.032C195.24 178.353 190.9 182.666 185.547 182.666C180.194 182.666 175.855 178.353 175.855 173.032C175.855 170.757 176.648 168.666 177.975 167.018C179.751 164.811 182.483 163.398 185.547 163.398C190.9 163.398 195.24 167.711 195.24 173.032Z" fill="white" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "14s", animationDelay: "0.7s", "--peak-x": "-20.31px", "--peak-y": "-10.84px" } as React.CSSProperties} />
                    {/* Dot for line 6 → endpoint (90.6645, 142.459) */}
                    <path d="M103.854 151.448C103.854 156.768 99.514 161.082 94.1609 161.082C88.8078 161.082 84.4682 156.768 84.4682 151.448C84.4682 147.352 87.0392 143.853 90.6645 142.459C91.7492 142.042 92.9282 141.813 94.1609 141.813C99.514 141.813 103.854 146.127 103.854 151.448Z" fill="#5533FF" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "9s", animationDelay: "4.3s", "--peak-x": "-2.85px", "--peak-y": "-5.93px" } as React.CSSProperties} />
                    {/* Dot for line 5 → endpoint (20.4717, 108.051) */}
                    <path d="M20.4717 108.051C20.4717 113.372 16.1321 117.685 10.779 117.685C5.42585 117.685 1.08628 113.372 1.08628 108.051C1.08628 102.73 5.42585 98.4169 10.779 98.4169C14.0041 98.4169 16.8614 99.9826 18.6234 102.391C19.7859 103.98 20.4717 105.936 20.4717 108.051Z" fill="white" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "12s", animationDelay: "2.4s", "--peak-x": "11.19px", "--peak-y": "0.95px" } as React.CSSProperties} />
                    {/* Dot for line 7 → endpoint (15.5314, 30.1396) */}
                    <path d="M10.1927 31.7315C4.83956 31.7315 0.5 27.4181 0.5 22.0974C0.5 16.7766 4.83956 12.4633 10.1927 12.4633C15.5458 12.4633 19.8854 16.7766 19.8854 22.0974C19.8854 23.8273 19.4266 25.4508 18.6234 26.8542C17.8666 28.1765 16.8041 29.3033 15.5314 30.1396C14.0004 31.1457 12.1654 31.7315 10.1927 31.7315Z" fill="#5533FF" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "15s", animationDelay: "1.1s", "--peak-x": "12.18px", "--peak-y": "16.54px" } as React.CSSProperties} />
                    {/* Dot for line 3 → endpoint (70.6782, 57.4198) */}
                    <path d="M70.6782 57.4198C65.3251 57.4198 60.9855 53.1065 60.9855 47.7857C60.9855 42.4649 65.3251 38.1515 70.6782 38.1515C76.0313 38.1515 80.3709 42.4649 80.3709 47.7857C80.3709 49.5157 79.9121 51.1392 79.1089 52.5425C77.4418 55.4553 74.2908 57.4198 70.6782 57.4198Z" fill="white" stroke="#111111" strokeLinejoin="round"
                      className="graph-node"
                      style={{ animationDuration: "10s", animationDelay: "3.2s", "--peak-x": "1.15px", "--peak-y": "11.08px" } as React.CSSProperties} />
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
