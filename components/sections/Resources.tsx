"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const resources = [
  {
    type: "登壇イベント",
    title: "LinkedIn Student Career Week 2025",
    description: "Salesforce・Microsoft米国本社社員が、日本の大学からグローバルテック企業にたどり着いたキャリア戦略をリアルに語る。学歴・英語・スキル・運——何が本当に効いたのか。BOUNDのAIキャリア体験デモも実施。",
    image: "/contents/events/lscw-event.png",
    link: "https://www.linkedin.com/posts/boundinternship_lscweetllpivdkociiy-egtegdefkeggegdefjedojnwjbpeetnbheeoedgeezeftefhegreeqlssoebeeqeex-activity-7450739831225331712-LbUT?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcGSk4B8GlhFxLq55fqNvIzmh1zKdQSBng",
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

function ResourceCard({ item }: { item: typeof resources[number] }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border/60 bg-surface hover:bg-foreground/[0.02] overflow-hidden transition-colors"
    >
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
      <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
        <span className={`self-start text-[10px] md:text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[item.type]}`}>
          {item.type}
        </span>
        <h3 className="text-[16px] md:text-[15px] font-bold text-foreground leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-[14px] md:text-[13px] text-foreground/55 leading-relaxed line-clamp-3 flex-1">
          {item.description}
        </p>
        <span className="inline-flex items-center gap-1 text-[14px] font-medium text-[#EA6B4A] mt-1 group-hover:gap-2 transition-all">
          {item.linkLabel}
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function Resources() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="resources" className="py-12 md:py-24 lg:py-32 px-5 md:px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-xs md:text-sm font-semibold text-[#EA6B4A] text-center uppercase tracking-widest mb-3 md:mb-4">
            Media & Events
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-8 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            メディア・イベント掲載
          </h2>
        </ScrollReveal>

        {/* デスクトップ：3列グリッド */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {resources.map((item, i) => (
            <ResourceCard key={i} item={item} />
          ))}
        </div>

        {/* モバイル：最初の2枚 + 展開ボタン */}
        <div className="md:hidden flex flex-col gap-4">
          {resources.slice(0, 2).map((item, i) => (
            <ResourceCard key={i} item={item} />
          ))}

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <ResourceCard item={resources[2]} />
              </motion.div>
            )}
          </AnimatePresence>

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border/60 text-[14px] font-medium text-foreground/50 hover:text-foreground/80 hover:border-foreground/20 transition-all"
            >
              もっと見る
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
