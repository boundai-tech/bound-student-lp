"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/variants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 border-t border-border">
      <div className="max-w-[960px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 leading-tight tracking-tight">
            3ステップで体験開始
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6"
        >
          {[
            {
              step: "01",
              title: "チャレンジを選ぶ",
              desc: "興味のある企業・職種のジョブチャレンジを一覧から選択",
            },
            {
              step: "02",
              title: "AIと一緒に取り組む",
              desc: "実際の業務課題にAIナビゲーターのサポートで挑戦",
            },
            {
              step: "03",
              title: "自分に合った出会いを見つける",
              desc: "学びながら、自分に合った職種と業界に出会う",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl border border-border/60 bg-surface/60 backdrop-blur-sm text-left"
            >
              <span className="text-[11px] font-bold text-[#EA6B4A]/60 tracking-widest mb-3 block">
                STEP {item.step}
              </span>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-[13px] text-foreground/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
