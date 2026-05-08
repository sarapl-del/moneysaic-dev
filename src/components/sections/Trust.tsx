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
    icon: "/images/icon-222.svg",
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
                ) : i === 1 ? (
                  <svg
                    className="icon-entrance"
                    width="160" height="155"
                    viewBox="0 0 196 190"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      overflow: "visible",
                      animation: inView ? `icon-rise 600ms ${EASING} ${i * STAGGER_MS}ms both` : "none",
                      opacity: inView ? undefined : 0,
                    }}
                  >
                    <path d="M97.8705 81.6747L178.766 115.679V115.52C178.766 115.573 178.766 115.626 178.766 115.679V134.586L97.8705 168.59L16.9753 134.586V115.679L97.8705 81.6747Z" fill="#F9F9F9"/>
                    <path d="M178.766 115.679L97.8705 81.6747L16.9753 115.679M178.766 115.679L97.8705 149.684M178.766 115.679V115.52C178.766 115.573 178.766 115.626 178.766 115.679ZM178.766 115.679V134.586L97.8705 168.59M97.8705 149.684L16.9753 115.679M97.8705 149.684V168.59M16.9753 115.679V134.586L97.8705 168.59" stroke="black" strokeLinejoin="round"/>
                    <path d="M16.9753 115.679V134.586L97.8705 168.59V149.684L16.9753 115.679Z" fill="white" stroke="black" strokeLinejoin="round"/>
                    <path d="M178.766 115.679L97.8706 149.683V168.59L178.766 134.585V115.679C178.766 115.626 178.766 115.573 178.766 115.52V115.679Z" fill="white"/>
                    <path d="M178.766 115.679L97.8706 149.683V168.59L178.766 134.585V115.679ZM178.766 115.679V115.52C178.766 115.573 178.766 115.626 178.766 115.679Z" stroke="black" strokeLinejoin="round"/>
                    <path d="M178.766 115.679L97.8705 81.6748L16.9753 115.679L97.8705 149.684L178.766 115.679Z" fill="#F9F9F9" stroke="black" strokeLinejoin="round"/>
                    <path d="M97.8705 51.1972L178.766 85.2015V85.0422C178.766 85.0952 178.766 85.1483 178.766 85.2015V104.108L97.8705 138.112L16.9753 104.108V85.2017L97.8705 51.1972Z" fill="#F9F9F9"/>
                    <path d="M178.766 85.2015L97.8705 51.1972L16.9753 85.2017M178.766 85.2015L97.8705 119.206M178.766 85.2015V85.0422C178.766 85.0952 178.766 85.1483 178.766 85.2015ZM178.766 85.2015V104.108L97.8705 138.112M97.8705 119.206L16.9753 85.2017M97.8705 119.206V138.112M16.9753 85.2017V104.108L97.8705 138.112" stroke="black" strokeLinejoin="round"/>
                    <path d="M16.9753 85.2021V104.109L97.8705 138.113V119.206L16.9753 85.2021Z" fill="white" stroke="black" strokeLinejoin="round"/>
                    <path d="M178.766 85.2018L97.8706 119.206V138.113L178.766 104.108V85.2018C178.766 85.1486 178.766 85.0956 178.766 85.0425V85.2018Z" fill="white"/>
                    <path d="M178.766 85.2018L97.8706 119.206V138.113L178.766 104.108V85.2018ZM178.766 85.2018V85.0425C178.766 85.0956 178.766 85.1486 178.766 85.2018Z" stroke="black" strokeLinejoin="round"/>
                    <path d="M178.766 85.2016L97.8705 51.1973L16.9753 85.2017L97.8705 119.206L178.766 85.2016Z" fill="#F9F9F9" stroke="black" strokeLinejoin="round"/>
                    <path d="M97.8705 20.7207L178.766 54.5656V73.6315L97.8705 107.636L16.9753 73.6315V54.7251L97.8705 20.7207Z" fill="#F9F9F9"/>
                    <path d="M178.766 54.5656L97.8705 20.7207L16.9753 54.7251M178.766 54.5656L97.8705 88.7294M178.766 54.5656C178.766 54.6187 178.766 54.5124 178.766 54.5656ZM178.766 54.5656V73.6315L97.8705 107.636M97.8705 88.7294L16.9753 54.7251M97.8705 88.7294V107.636M16.9753 54.7251V73.6315L97.8705 107.636" stroke="black" strokeLinejoin="round"/>
                    <path d="M16.9753 54.7256V73.632L97.8705 107.636" stroke="#5533FF" strokeLinejoin="round"/>
                    <path d="M178.766 54.5632V73.6317L97.8706 107.636" stroke="#5533FF" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M178.57 54.4864L97.8705 20.7207L16.9753 54.7252" stroke="#5533FF" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                      d="M97.92 0.5 L195.24 40.83 L195.24 147.71 L97.94 188.81 L0.5 147.80 L0.5 40.72 Z"
                      stroke="#9C9C9C"
                      strokeWidth="0.5"
                      strokeDasharray="1.8 1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.marchDash}
                    />
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
