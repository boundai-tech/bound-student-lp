"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const resources = [
  {
    type: "登壇イベント",
    title: "LinkedIn Student Career Week 2025",
    description: "Salesforce・Microsoft米国本社社員が、日本の大学からグローバルテック企業にたどり着いたキャリア戦略をリアルに語る。学歴・英語・スキル・運——何が本当に効いたのか。BOUNDのAIキャリア体験デモも実施。",
    image: "/contents/events/lscw-event.png",
    link: "https://lscw.scoutalia.com/",
    linkLabel: "イベント詳細",
  },
  {
    type: "コラボイベント",
    title: "Y&Y Journey × BOUND｜ジョブチャレンジクリエーター ワークショップ",
    description: "TECH業界の主要職種を徹底解説！BOUNDで「自分にピッタリの職種」を見つけるオンラインワークショップを開催。学生・若手社会人が集まるコミュニティ Y&Y Journey とのコラボ企画。",
    image: "/contents/events/yy-journey-event.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7377949078569197568",
    linkLabel: "詳細を見る",
  },
  {
    type: "メディア",
    title: "BOUNDが目指す、新しい就活のかたち",
    description: "実務体験を通じて自分に合った職種・業界を見つける。BOUNDのプロダクトビジョンと学生への想いをnoteで公開しています。",
    image: "https://assets.st-note.com/production/uploads/images/220278754/rectangle_large_type_2_e8f8cca03fe78d2084e4bb9ce441ce20.png?fit=bounds&quality=85&width=1280",
    link: "https://note.com/bound_datact/n/nc2211cee22a7?sub_rt=share_sb",
    linkLabel: "noteで読む",
  },
];

const typeColors: Record<string, string> = {
  "登壇イベント": "text-[#EA6B4A] bg-[#EA6B4A]/8 border-[#EA6B4A]/20",
  "コラボイベント": "text-purple-600 bg-purple-50 border-purple-200",
  "メディア": "text-blue-600 bg-blue-50 border-blue-200",
};

export default function Resources() {
  return (
    <section id="resources" className="py-12 md:py-24 lg:py-32 px-5 md:px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-8 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            メディア・イベント掲載
          </h2>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {resources.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="group flex flex-col rounded-xl border border-border/60 bg-surface hover:bg-foreground/[0.02] overflow-hidden transition-colors"
            >
              {/* 画像 or プレースホルダー */}
              {item.image ? (
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/9] bg-foreground/[0.03] flex items-center justify-center border-b border-border/40">
                  <span className="text-[11px] font-medium text-foreground/30 uppercase tracking-widest">{item.type}</span>
                </div>
              )}

              {/* コンテンツ */}
              <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                <span className={`self-start text-[10px] md:text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[item.type]}`}>
                  {item.type}
                </span>
                <h3 className="text-[14px] md:text-[15px] font-bold text-foreground leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-foreground/55 leading-relaxed line-clamp-3 flex-1">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#EA6B4A] mt-1 group-hover:gap-2 transition-all">
                  {item.linkLabel}
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
