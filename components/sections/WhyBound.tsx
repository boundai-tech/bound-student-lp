"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "時間や場所に縛られず、実際の企業課題に挑戦",
    description: "インターンのように選考も交通費も不要。スマホやPCがあればいつでもリアルな業務を体験できる。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "業界 × 職種の掛け合わせで、働くことの解像度が上がる",
    description: "同じ「マーケター」でもB2B SaaSと消費財では仕事がまったく異なる。リアルな企業課題に挑戦することで、職種・業界への具体的な理解が深まる。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "語れる体験が、就活の武器になる",
    description: "実際の企業課題に取り組んだ経験は、ESや面接で具体的に語れる素材に。インターン経験がなくても、リアルな実務体験が自分の強みとして積み上がる。",
  },
];

export default function WhyBound() {
  return (
    <section className="py-12 md:py-24 lg:py-32 px-5 md:px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <p className="text-xs md:text-sm font-semibold text-[#EA6B4A] text-center uppercase tracking-widest mb-3 md:mb-4">
            Our Mission
          </p>
          <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-4 md:mb-6 leading-snug tracking-tight">
            説明会でも就活サイトでもない、<br />新しい就活の体験
          </h2>
          <p className="text-[13px] md:text-base text-foreground/55 text-center max-w-3xl mx-auto mb-8 md:mb-14 lg:mb-16 leading-relaxed">
            同じ職種でも、業界や企業によって仕事はまったく異なる。<br className="hidden sm:block" />
            BOUNDは実務体験を通じて、<strong className="text-foreground/75 font-semibold">学びと働くのギャップを埋める</strong>ことを支援します。
          </p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="h-full bg-surface hover:bg-foreground/[0.02] rounded-xl border border-border/60 p-4 md:p-6 transition-colors"
            >
              <div className="mb-3 md:mb-4 text-[#EA6B4A] text-xs md:text-sm font-semibold">
                ポイント {i + 1}
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EA6B4A]/8 text-[#EA6B4A] mb-4">
                {reason.icon}
              </div>
              <h3 className="text-[13px] md:text-lg font-bold text-foreground mb-2 leading-snug">{reason.title}</h3>
              <p className="text-[12px] md:text-sm text-foreground/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
