"use client";

import { motion } from "framer-motion";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function ChallengeEmbed() {
  const iframeSrc = `${STUDENT_SITE_URL}/embed/challenges`;

  return (
    <section id="challenges" className="pt-4 sm:pt-6 pb-16 sm:pb-20 md:pb-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* iframeコンテナ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-px bg-gradient-to-b from-[#0891B2]/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          <div className="relative rounded-2xl border border-border/60 overflow-hidden bg-surface shadow-sm">
            <iframe
              src={iframeSrc}
              width="100%"
              height="1100px"
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
