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
  const [squareOut, setSquareOut] = useState(false);

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
                      <line x1="164.668" y1="152.234" x2="101.589" y2="152.234" stroke="#5533ff" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("0s") }} />
                      {/* Left→top (delay: 63.08/191.52*8 ≈ 2.63s) */}
                      <line x1="55.5229" y1="141.299" x2="85.6373" y2="85.8171" stroke="#5533ff" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("2.63s") }} />
                      {/* Top→right-bottom (delay: 126.21/191.52*8 ≈ 5.27s) */}
                      <line x1="126.583" y1="53.4981" x2="159.034" y2="110.173" stroke="#5533ff" strokeWidth="1.17907" strokeDasharray="72 1000" style={{ animation: LINE_DOT_ANIM("5.27s") }} />
                    </svg>
                  </div>

                ) : (
                  // Column 3: three-layer starburst — slow CW rotation + staggered branch pulse
                  <div
                    className="icon-entrance"
                    style={{
                      width: 160,
                      height: 160,
                      animation: inView ? `icon-rise 600ms ${EASING} ${i * STAGGER_MS}ms both` : "none",
                      opacity: inView ? undefined : 0,
                    }}
                  >
                    <svg
                      width="160" height="160"
                      viewBox="0 0 197 195"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ overflow: "visible" }}
                    >
                      {/* Layer 1: #321 — full position, most prominent */}
                      <g className="branch-pulse-layer" style={{ transformBox: "fill-box", transformOrigin: "50% 50%", animation: "branchPulse 5s ease-in-out 0s infinite alternate" }}>
                        <path d="M104.176 89.3434L171.224 111.129C173.51 104.093 174.674 96.7412 174.674 89.3434H104.176ZM104.176 89.3434L165.021 133.532C169.658 127.147 173.261 120.072 175.698 112.567L104.176 89.3434ZM104.176 89.3434L152.499 155.898C159.483 150.827 165.625 144.689 170.701 137.708L104.176 89.3434ZM104.176 89.3434L132.463 176.516C141.611 173.548 150.234 169.158 158.017 163.508L104.176 89.3434ZM104.176 89.3434L136.127 187.68C125.808 191.033 115.026 192.741 104.176 192.741L104.176 89.3434ZM104.176 89.3434L82.3909 156.391C89.4265 158.677 96.7782 159.841 104.176 159.841L104.176 89.3434ZM104.176 89.3434L59.9877 150.188C66.3725 154.825 73.4474 158.428 80.9526 160.865L104.176 89.3434ZM104.176 89.3434L37.6211 137.667C42.692 144.65 48.8305 150.793 55.8113 155.868L104.176 89.3434ZM104.176 89.3434L17.0033 117.631C19.9716 126.778 24.3613 135.402 30.0111 143.184L104.176 89.3434ZM104.176 89.3434L5.83942 121.295C2.48658 110.976 0.778808 100.193 0.778809 89.3432L104.176 89.3434ZM104.174 89.3305L185.504 62.5165C182.649 53.8546 178.427 45.7045 173 38.3743L104.174 89.3305ZM104.174 89.3305L195.519 88.9339C195.477 79.3485 193.927 69.8295 190.926 60.7262L104.174 89.3305ZM104.176 89.3409L25.7437 64.5812C23.1455 72.8115 21.7584 80.7128 21.8307 89.3432L104.176 89.3409ZM104.176 89.3409L29.5868 36.0897C23.9988 43.9168 19.6777 52.5747 16.7819 61.7455L104.176 89.3409ZM104.176 89.3409L20.0012 29.2947C26.3022 20.4617 33.9542 12.6756 42.6763 6.22205L104.176 89.3409ZM104.176 89.3415L81.8091 22.4857C74.7936 24.8328 68.1912 28.2694 62.2443 32.6696L104.176 89.3415ZM104.176 89.3415L103.508 14.1465C95.6172 14.2167 87.7867 15.5283 80.304 18.0333L104.176 89.3415ZM104.176 89.3415L128.936 10.9091C120.705 8.31089 112.117 7.02434 103.487 7.09665L104.176 89.3415ZM104.176 89.3415L157.427 14.7521C149.6 9.16418 140.942 4.84302 131.771 1.94727L104.176 89.3415ZM104.176 89.3415L164.222 5.16655C173.055 11.4675 180.841 19.1195 187.295 27.8417L104.176 89.3415Z" stroke="black" strokeWidth="1.55792" strokeLinejoin="round" />
                      </g>
                      {/* Layer 2: #322 — translated to common center, mid opacity */}
                      <g transform="translate(-21.556 -29.79)">
                        <g className="branch-pulse-layer" style={{ opacity: 0.45, transformBox: "fill-box", transformOrigin: "50% 50%", animation: "branchPulse 5s ease-in-out 1.67s infinite alternate" }}>
                          <path d="M125.732 119.133L165.925 132.195C167.295 127.977 167.993 123.569 167.993 119.133H125.732ZM125.732 119.133L162.207 145.628C164.986 141.8 167.146 137.558 168.607 133.058L125.732 119.133ZM125.732 119.133L154.7 159.038C158.887 155.998 162.569 152.318 165.611 148.132L125.732 119.133ZM125.732 119.133L142.689 171.401C148.173 169.621 153.342 166.989 158.008 163.601L125.732 119.133ZM125.732 119.133L144.886 178.094C138.7 180.105 132.236 181.128 125.732 181.128L125.732 119.133ZM125.732 119.133L103.966 186.134C110.996 188.419 118.341 189.582 125.732 189.582V119.133ZM125.732 119.133L78.5477 184.116C85.3654 189.069 92.92 192.917 100.934 195.519L125.732 119.133ZM125.732 119.133L51.6367 172.942C57.2821 180.719 64.116 187.558 71.8878 193.209L125.732 119.133ZM125.732 119.133L26.5773 151.315C29.9537 161.722 34.9467 171.532 41.3731 180.386L125.732 119.133ZM125.732 119.133L13.1919 155.707C9.35482 143.895 7.40039 131.553 7.40039 119.133L125.732 119.133ZM125.732 119.133L138.791 78.9329C134.574 77.5622 130.167 76.8641 125.732 76.8641L125.732 119.133ZM125.732 119.133L152.221 82.6518C148.394 79.8716 144.153 77.7113 139.654 76.2501L125.732 119.133ZM125.732 119.133L165.629 90.1596C162.59 85.9722 158.91 82.2894 154.725 79.2464L125.732 119.133ZM125.732 119.133L177.989 102.173C176.21 96.6881 173.578 91.5177 170.191 86.8514L125.732 119.133ZM125.732 119.133L184.682 99.9759C186.691 106.163 187.715 112.628 187.715 119.133L125.732 119.133ZM125.732 119.133L58.7439 97.3635C56.4598 104.394 55.2965 111.741 55.2965 119.133H125.732ZM125.732 119.133L60.7615 71.9402C55.8102 78.7592 51.9628 86.3152 49.3606 94.3308L125.732 119.133ZM125.732 119.133L71.9338 45.024C64.1586 50.6705 57.3203 57.5057 51.6701 65.2789L125.732 119.133ZM125.732 119.133L93.5564 19.9599C83.1515 23.3369 73.3429 28.3309 64.4906 34.7585L125.732 119.133ZM125.732 119.133L89.1655 6.57196C100.975 2.7341 113.315 0.779295 125.732 0.779297L125.732 119.133Z" stroke="black" strokeWidth="1.55792" strokeLinejoin="round" />
                        </g>
                      </g>
                      {/* Layer 3: #323 — translated to common center, dimmest */}
                      <g transform="translate(-13.037 -21.445)">
                        <g className="branch-pulse-layer" style={{ opacity: 0.25, transformBox: "fill-box", transformOrigin: "50% 50%", animation: "branchPulse 5s ease-in-out 3.33s infinite alternate" }}>
                          <path d="M117.213 110.788L161.806 125.277C163.326 120.598 164.101 115.708 164.101 110.788H117.213ZM117.213 110.788L157.681 140.177C160.765 135.931 163.161 131.225 164.782 126.234L117.213 110.788ZM117.213 110.788L149.353 155.053C153.998 151.68 158.083 147.598 161.458 142.955L117.213 110.788ZM117.213 110.788L136.027 168.765C142.111 166.791 147.846 163.872 153.022 160.114L117.213 110.788ZM117.213 110.788L138.464 176.19C131.601 178.42 124.43 179.556 117.213 179.556L117.213 110.788ZM117.213 110.788L42.9565 135.132C45.5111 142.924 49.2762 150.266 54.1137 156.887L117.213 110.788ZM117.213 110.788L64.8643 182.87C72.4283 188.364 80.8098 192.632 89.7012 195.519L117.213 110.788ZM117.213 110.788L35.0075 170.475C41.2708 179.102 48.8529 186.688 57.4753 192.957L117.213 110.788ZM117.213 110.788L1.55811 110.969C1.57707 123.105 3.50616 135.163 7.27457 146.699L117.213 110.788ZM117.213 110.788L117.283 171.742C110.887 171.749 104.529 170.749 98.4441 168.78L117.213 110.788ZM117.213 110.788L131.703 66.1954C127.023 64.6749 122.134 63.9005 117.214 63.9005L117.213 110.788ZM117.213 110.788L146.603 70.3206C142.356 67.2366 137.651 64.8403 132.659 63.2195L117.213 110.788ZM117.213 110.788L117.2 56.0859C111.46 56.0874 105.755 56.9923 100.297 58.7675L117.213 110.788ZM117.213 110.788L175.191 91.9743C173.217 85.8904 170.297 80.1551 166.54 74.979L117.213 110.788ZM117.213 110.788L182.616 89.5374C184.846 96.4004 185.982 103.572 185.982 110.788H117.213ZM117.213 110.788L42.8926 86.6396C40.3586 94.4385 39.0679 102.588 39.0679 110.788L117.213 110.788ZM117.213 110.788L45.1311 58.4386C39.6378 66.0027 35.3693 74.3842 32.4823 83.2755L117.213 110.788ZM117.213 110.788L57.5264 28.5818C48.9 34.8451 41.3133 42.4272 35.0446 51.0497L117.213 110.788ZM117.213 110.788L81.5159 0.779297C69.972 4.52527 59.0897 10.0649 49.2685 17.1948L117.213 110.788ZM117.213 110.788L172.546 34.6906C180.531 40.4969 187.553 47.5239 193.353 55.5137L117.213 110.788Z" stroke="black" strokeWidth="1.55792" strokeLinejoin="round" />
                        </g>
                      </g>
                    </svg>
                  </div>
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
