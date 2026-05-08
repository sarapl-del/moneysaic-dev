import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to go live?",
    answer:
      "From signed contract to a working product in as little as 8 weeks. The first two weeks cover technical alignment and scope, weeks three through nine handle integration, compliance, and brand delivery, and the final phase is full QA and launch readiness.",
  },
  {
    question: "Do I need to build anything myself?",
    answer:
      "No. moneysaic handles design, engineering, and compliance infrastructure. You bring the product vision — we deliver a production-grade application branded as your own.",
  },
  {
    question: "Which compliance standards does moneysaic support?",
    answer:
      "The platform is built around ISO 27001, GDPR, and PSD2. Compliance is baked into the architecture, not added after the fact, so your audit trail is automatic.",
  },
  {
    question: "Can I customise the modules to match my brand?",
    answer:
      "Yes. Every interface is built on our pre-engineered component library and delivered with full brand identity applied — your colours, typography, and design language throughout.",
  },
  {
    question: "What banking and infrastructure partners do you work with?",
    answer:
      "Our ecosystem includes Integrated Finance, Griffin, Sumsub, Thredd, and Currencycloud. We integrate natively on your chosen infrastructure with no redundant middleware layer.",
  },
  {
    question: "Can I test before going live?",
    answer:
      "Yes. Every deployment includes a full sandbox environment that mirrors production. You can test payment flows, KYC edge cases, and compliance flags without touching live data.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We support the full arc of your venture — from regulatory navigation and market entry strategy to investor connections and strategic coaching. We don't stop at launch.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a 30-minute call with our team. We'll cover your product goals, which modules apply, and a realistic launch timeline — no sales theatre.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="border-t border-muted-border bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-9">
        <h2 className="mb-16 text-3xl font-semibold leading-tight tracking-tight text-dark md:mb-20 md:text-4xl">
          FAQ
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i}>
              {i > 0 && <div className="border-t border-black" />}
              <button
                className="group flex w-full cursor-pointer items-center justify-between gap-8 py-5 text-left md:py-6"
                onClick={() => toggle(i)}
              >
                <span className="text-base font-semibold tracking-tight text-dark transition-colors duration-150 ease-in-out group-hover:text-brand md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-dark transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="pb-5 text-base leading-relaxed text-dark md:pb-6 md:max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-black" />
        </div>
      </div>
    </section>
  );
}
