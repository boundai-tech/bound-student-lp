"use client";

import { useRef, useEffect, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { jobChallenges } from "@/lib/data/jobChallenges";

export default function JobChallengeTypes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="job-types" className="py-12 md:py-24 lg:py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <ScrollReveal>
          <p className="text-xs md:text-sm font-semibold text-[#EA6B4A] text-center uppercase tracking-widest mb-3 md:mb-4">
            Job Types
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-8 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            あらゆる職種の<br className="sm:hidden" />チャレンジに挑戦できる
          </h2>
        </ScrollReveal>
      </div>

      {/* カルーセルラッパー（モバイルのみ overflow-hidden でクリップ） */}
      <div className="md:hidden overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 scrollbar-none pb-2"
          style={{ scrollSnapType: "x mandatory", touchAction: "pan-x", overflowX: "scroll", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
        {jobChallenges.map((job, i) => (
          <div
            key={job.id}
            className="flex-none w-[78vw] bg-surface border border-border/60 rounded-2xl p-5 flex flex-col gap-4"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* 番号 */}
            <span className="text-xs font-semibold text-[#EA6B4A] uppercase tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* 職種名 + キャッチコピー */}
            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-foreground leading-tight mb-1">
                {job.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#EA6B4A] font-medium leading-snug">
                {job.catchcopy}
              </p>
            </div>

            {/* 説明文 */}
            <p className="text-[13px] md:text-[14px] text-foreground/60 leading-relaxed flex-1">
              {job.description}
            </p>

            {/* タグ */}
            <div className="flex flex-wrap gap-1.5">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-foreground/[0.06] text-foreground/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
          {/* 末尾スペーサー：右余白を左と揃える */}
          <div className="flex-none" style={{ width: "calc(5vw - 16px)" }} aria-hidden />
        </div>
      </div>

      {/* デスクトップ：グリッド */}
      <div className="hidden md:grid md:grid-cols-4 gap-5 px-6 max-w-[1200px] mx-auto">
        {jobChallenges.map((job, i) => (
          <div
            key={job.id}
            className="bg-surface border border-border/60 rounded-2xl p-6 flex flex-col gap-4"
          >
            <span className="text-xs font-semibold text-[#EA6B4A] uppercase tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-[20px] font-bold text-foreground leading-tight mb-1">{job.title}</h3>
              <p className="text-[14px] text-[#EA6B4A] font-medium leading-snug">{job.catchcopy}</p>
            </div>
            <p className="text-[14px] text-foreground/60 leading-relaxed flex-1">{job.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {job.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-foreground/[0.06] text-foreground/60">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* モバイル：スクロールインジケーター */}
      <p className="md:hidden text-center text-[11px] text-foreground/30 mt-4 tracking-wide">
        スワイプして見る →
      </p>
    </section>
  );
}
