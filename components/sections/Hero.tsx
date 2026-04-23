"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-36 md:pt-44 pb-10 sm:pb-16 md:pb-20 px-5 md:px-6 flex flex-col items-center text-center overflow-hidden">
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
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-bold text-foreground leading-[1.2] tracking-tight">
            働くを体験して<br />自分に合ったキャリアを
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-foreground/60 leading-[1.8] max-w-[620px] mx-auto">
            仕事のリアルは、体験してはじめてわかる。<br />企業の課題に挑戦して、就活の軸をつくろう。
          </p>
        </motion.div>

        {/* CTAボタン */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#challenges"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-[15px] font-semibold shadow-lg transition-[transform,opacity] duration-150 ease-out hover:opacity-80 hover:scale-[1.02] active:scale-[0.97]"
          >
            チャレンジを見る
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={`${STUDENT_SITE_URL}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            無料で登録する
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
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/20 dark:shadow-black/50 border border-border/50 aspect-[3/4] sm:aspect-auto">
            <Image
              src="/contents/screenshots/highlight2-new.png"
              alt="BOUNDのジョブチャレンジ体験画面"
              width={1200}
              height={720}
              className="w-full h-full sm:h-auto object-cover sm:object-auto object-top sm:scale-100 scale-[1.02] origin-top"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
