"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const diff = current - lastScrollY.current;

      if (diff > 4) {
        // 下スクロール → 隠す
        setVisible(false);
      } else if (diff < -4) {
        // 上スクロール → 表示
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -36 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[60] bg-[#EA6B4A] text-white"
        >
          <div className="max-w-[1200px] mx-auto px-4 h-9 flex items-center justify-center relative">
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7377949078569197568"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              <span>🎤</span>
              <span className="hidden sm:inline">LinkedIn Student Career Week に登壇！</span>
              <span className="sm:hidden">LinkedIn Student Career Week 登壇</span>
              <span className="inline-flex items-center gap-1 underline underline-offset-2 opacity-90">
                詳細を見る
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
              aria-label="閉じる"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
