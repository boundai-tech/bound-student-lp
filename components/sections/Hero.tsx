"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-16 md:pb-20 px-5 md:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#EA6B4A]/8 via-[#EA6B4A]/4 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[860px] space-y-6 md:space-y-8"
      >
        {/* キャッチコピー */}
        <motion.div variants={staggerItem} className="space-y-4">
          <h1 className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-foreground leading-[1.2] tracking-tight">
            働くを体験して、<br />自分のキャリアを<br className="sm:hidden" />見つけよう
          </h1>
          <p className="text-[14px] sm:text-[17px] md:text-[19px] text-foreground/60 leading-[1.8] max-w-[620px] mx-auto">
            AIと"自分に合った仕事"が見つかる新たな職業体験。企業のリアルな課題に挑戦し、自分の適性と就活の軸を見つけよう。
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-[#EA6B4A] text-white text-[15px] font-semibold shadow-lg transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-[#EA6B4A]/90 hover:scale-[1.02] hover:shadow-xl active:scale-[0.97]"
          >
            無料で始める
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#challenges"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[15px] font-semibold transition-[transform,opacity] duration-150 ease-out hover:opacity-80 hover:scale-[1.02] active:scale-[0.97]"
          >
            ジョブチャレンジを見る
          </a>
        </motion.div>

      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-[1200px] mt-8 sm:mt-10 md:mt-12"
      >
        <div className="relative">
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-foreground/10 via-foreground/5 to-foreground/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-40" />
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/20 dark:shadow-black/50 border border-border/50">
            <Image
              src="/contents/screenshots/highlight2-new.png"
              alt="BOUNDのジョブチャレンジ体験画面"
              width={1200}
              height={720}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
