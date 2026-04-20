"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function ChallengeEmbed() {
  const iframeSrc = `${STUDENT_SITE_URL}/embed/challenges`;

  return (
    <section id="challenges" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-10 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            公開中のジョブチャレンジ
          </h2>
        </ScrollReveal>

        {/* iframeコンテナ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-px bg-gradient-to-b from-[#EA6B4A]/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          <div className="relative rounded-2xl border border-border/60 overflow-hidden bg-surface shadow-sm">
            <iframe
              src={iframeSrc}
              width="100%"
              height="860px"
              frameBorder="0"
              scrolling="no"
              title="BOUND ジョブチャレンジ一覧"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
