import { useRef, useState, useEffect } from "react";
import styles from "./Trust.module.css";

const columns = [
  {
    icon: "/images/icon-102.svg",
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

const EASING = "cubic-bezier(0.25, 1, 0.5, 1)";
const STAGGER_MS = 120;

export default function Trust() {
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
                {i === 0 ? (
                  <svg
                    className={`${styles.icon} icon-entrance`}
                    width="160" height="160"
                    viewBox="0 0 196 196"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      overflow: "visible",
                      animation: inView ? `icon-rise 600ms ${EASING} 0ms both` : "none",
                      opacity: inView ? undefined : 0,
                    }}
                  >
                    <g className={styles.circleBottom}>
                      <path d="M69.4594 183.472C85.1501 199.162 110.59 199.162 126.28 183.472C141.971 167.781 141.971 142.342 126.28 126.651C110.59 110.96 85.1501 110.96 69.4594 126.651C53.7687 142.341 53.7687 167.781 69.4594 183.472Z" fill="#F9F9F9" stroke="black" strokeLinejoin="round"/>
                      <path d="M69.4595 183.472C85.1501 199.163 110.59 199.163 126.28 183.472C141.971 167.782 141.971 142.342 126.28 126.651L69.4595 183.472Z" fill="white" stroke="black" strokeLinejoin="round"/>
                    </g>
                    <g className={styles.circleLeft}>
                      <path d="M12.268 69.4603C-3.42272 85.151 -3.42276 110.591 12.2679 126.281C27.9585 141.972 53.3982 141.972 69.0889 126.281C84.7796 110.591 84.7796 85.1511 69.0889 69.4604C53.3983 53.7697 27.9587 53.7697 12.268 69.4603Z" fill="#F9F9F9" stroke="black" strokeLinejoin="round"/>
                      <path d="M12.2687 69.4589C-3.42201 85.1496 -3.42205 110.589 12.2686 126.28C27.9593 141.971 53.3989 141.971 69.0896 126.28L12.2687 69.4589Z" fill="white" stroke="black" strokeLinejoin="round"/>
                    </g>
                    <g className={styles.circleTop}>
                      <path d="M126.28 12.2685C110.589 -3.42221 85.1498 -3.42224 69.4591 12.2684C53.7685 27.9591 53.7684 53.3987 69.4591 69.0894C85.1498 84.7801 110.589 84.7801 126.28 69.0894C141.971 53.3988 141.971 27.9592 126.28 12.2685Z" fill="#F9F9F9" stroke="black" strokeLinejoin="round"/>
                      <path d="M126.281 12.268C110.59 -3.42273 85.1505 -3.42276 69.4598 12.2679C53.7691 27.9586 53.7691 53.3982 69.4597 69.0889L126.281 12.268Z" fill="white" stroke="black" strokeLinejoin="round"/>
                    </g>
                    <g className={styles.circleRight}>
                      <path d="M183.472 126.281C199.163 110.59 199.163 85.1505 183.472 69.4598C167.781 53.7692 142.342 53.7692 126.651 69.4598C110.96 85.1505 110.96 110.59 126.651 126.281C142.342 141.971 167.781 141.971 183.472 126.281Z" fill="#F9F9F9" stroke="black" strokeLinejoin="round"/>
                      <path d="M183.472 126.281C199.163 110.591 199.163 85.1509 183.472 69.4602C167.781 53.7696 142.342 53.7696 126.651 69.4602L183.472 126.281Z" fill="white" stroke="black" strokeLinejoin="round"/>
                    </g>
                  </svg>
                ) : (
                  <div
                    className="transition-transform"
                    style={{ transitionDuration: "250ms", transitionTimingFunction: EASING }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <img
                      src={col.icon}
                      alt=""
                      className="icon-entrance h-40 w-40 object-contain"
                      style={{
                        animation: inView ? `icon-rise 600ms ${EASING} ${i * STAGGER_MS}ms both` : "none",
                        opacity: inView ? undefined : 0,
                      }}
                    />
                  </div>
                )}
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
