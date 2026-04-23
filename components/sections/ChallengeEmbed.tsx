"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function ChallengeEmbed() {
  const iframeSrc = `${STUDENT_SITE_URL}/embed/challenges`;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="challenges" className="py-12 md:py-24 lg:py-32 px-5 md:px-6 border-t border-border scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-xs md:text-sm font-semibold text-[#EA6B4A] text-center uppercase tracking-widest mb-3 md:mb-4">
            Challenges
          </p>
          <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-semibold text-foreground/90 text-center mb-8 md:mb-14 lg:mb-16 leading-tight tracking-tight">
            公開中のジョブチャレンジ
          </h2>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-px bg-gradient-to-b from-[#EA6B4A]/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          <div className={`relative rounded-2xl border border-border/60 bg-surface shadow-sm ${isMobile ? "overflow-y-auto" : "overflow-hidden"}`}>
            <iframe
              src={iframeSrc}
              width="100%"
              height={isMobile ? "520px" : "660px"}
              frameBorder="0"
              scrolling={isMobile ? "yes" : "no"}
              title="BOUND ジョブチャレンジ一覧"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
