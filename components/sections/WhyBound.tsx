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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "教科書では身につかないスキルを磨ける",
    description: "データ分析、マーケティング、エンジニアリング...実際の課題を解くことで、就活でも語れる実践力が身につく。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "学生は完全無料、追加料金も0円",
    description: "登録から体験まで完全無料。AIサポートも含めて、一切の費用がかからない。",
  },
];

export default function WhyBound() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <ScrollReveal>
          <h2 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-10 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            説明会でも就活サイトでもない、<br className="hidden sm:block" />新しい就活の体験
          </h2>
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
              className="h-full bg-surface hover:bg-foreground/[0.02] rounded-xl border border-border/60 p-5 md:p-6 transition-colors"
            >
              <div className="mb-3 md:mb-4 text-[#EA6B4A] text-xs md:text-sm font-semibold">
                ポイント {i + 1}
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EA6B4A]/8 text-[#EA6B4A] mb-4">
                {reason.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-[13px] md:text-sm text-foreground/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
