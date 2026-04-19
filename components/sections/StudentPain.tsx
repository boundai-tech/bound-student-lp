"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pains = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "自分に向いてる仕事が分からない",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: "説明会だけじゃ仕事のリアルが見えない",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "早期から動きたいのに、チャンスが少ない",
  },
];

export default function StudentPain() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-10 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            就活、こんなお悩みありませんか？
          </h2>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
        >
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="h-full bg-surface hover:bg-foreground/[0.02] rounded-xl border border-border/60 p-5 md:p-6 transition-colors"
            >
              <div className="mb-3 md:mb-4 text-[#EA6B4A] text-xs md:text-sm font-semibold">
                お悩み {i + 1}
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EA6B4A]/8 text-[#EA6B4A] mb-4">
                {pain.icon}
              </div>
              <p className="text-base md:text-lg font-bold text-foreground">{pain.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
