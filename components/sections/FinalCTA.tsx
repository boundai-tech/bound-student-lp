"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/60 bg-gradient-to-br from-foreground/[0.03] via-foreground/[0.015] to-transparent backdrop-blur-sm">
            {/* 背景グロー */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#EA6B4A]/6 blur-3xl pointer-events-none" />

            <div className="relative px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 text-center">
              <div className="mb-6 md:mb-8 flex flex-col items-center space-y-4">
                <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-foreground leading-tight tracking-tight">
                  今すぐ体験を始めよう
                </h2>
                <Image
                  src="/contents/logos/brand.svg"
                  alt="BOUND"
                  width={140}
                  height={24}
                  className="h-6 sm:h-7 md:h-8 w-auto invert opacity-80"
                />
              </div>

              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-foreground/50 mb-8 md:mb-10 leading-relaxed max-w-[500px] mx-auto">
                企業が公開した実務をオンラインで体験する、新しい学びのかたち。
                <span className="block mt-1">自分に合った職種と業界を、AIと学びながら探そう。</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={`${STUDENT_SITE_URL}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-full bg-[#EA6B4A] text-white text-[14px] font-semibold hover:bg-[#EA6B4A]/90 transition-all shadow-sm"
                >
                  無料で始める
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <p className="mt-5 text-xs text-foreground/35">
                クレジットカード不要・いつでも退会可能
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
