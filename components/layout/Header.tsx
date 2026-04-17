"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <Image
              src="/contents/logos/brand.svg"
              alt="BOUND"
              width={100}
              height={16}
              className="h-4 w-auto invert"
            />
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            <a href="#challenges" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
              チャレンジ一覧
            </a>
            <a href="#how-it-works" className="text-[13px] text-foreground/70 hover:text-foreground transition-colors">
              使い方
            </a>
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`${STUDENT_SITE_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              ログイン
            </a>
            <a
              href={`${STUDENT_SITE_URL}/register`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] bg-[#0891B2] text-white font-medium rounded-full px-4 py-1.5 hover:bg-[#0891B2]/90 transition-all"
            >
              無料で始める
            </a>
          </div>

          {/* モバイルハンバーガー */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="メニュー"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="px-6 py-4 space-y-3">
              <a
                href="#challenges"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                チャレンジ一覧
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[15px] text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                使い方
              </a>
              <div className="pt-3 space-y-2">
                <a
                  href={`${STUDENT_SITE_URL}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-[15px] bg-[#0891B2] text-white font-medium rounded-full px-4 py-2 hover:bg-[#0891B2]/90 transition-all"
                >
                  無料で始める
                </a>
                <a
                  href={`${STUDENT_SITE_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-[15px] text-foreground/50 hover:text-foreground/80 transition-colors py-1"
                >
                  ログイン
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
