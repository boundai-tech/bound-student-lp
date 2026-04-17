"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-8 md:pb-10 px-4 md:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#0891B2]/8 via-[#0891B2]/4 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[860px] space-y-6 md:space-y-8"
      >
        {/* キャッチコピー */}
        <motion.div variants={staggerItem} className="space-y-4">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-foreground leading-[1.15] tracking-tight">
            働くを体験して、
            <br />
            自分のキャリアを見つけよう
          </h1>
          <p className="text-[15px] sm:text-[17px] md:text-[19px] text-foreground/60 leading-[1.75] max-w-[620px] mx-auto">
            企業が公開した実務をオンラインで体験する、新しい学びのかたち。
            <br className="hidden sm:block" />
            自分に合った職種と業界を、AIと学びながら探そう。
          </p>
        </motion.div>

        {/* CTAボタン */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={`${STUDENT_SITE_URL}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0891B2] text-white text-[14px] sm:text-[15px] font-semibold hover:bg-[#0891B2]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            無料で始める
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
