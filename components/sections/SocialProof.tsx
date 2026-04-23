"use client";

import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="py-8 md:py-12 px-5 md:px-6 border-t border-border/50">
      <div className="max-w-[860px] mx-auto flex flex-col items-center gap-3">
        <p className="text-[11px] font-semibold text-foreground/30 uppercase tracking-widest">
          Featured In
        </p>
        <a href="#resources" className="flex items-center gap-3 group">
          <Image
            src="/contents/logos/linkedin.png"
            alt="LinkedIn"
            width={120}
            height={30}
            className="h-6 sm:h-7 w-auto"
          />
          <span className="text-[14px] sm:text-[15px] font-medium text-foreground/60 group-hover:text-foreground/90 transition-colors">
            Student Career Week へ登壇 →
          </span>
        </a>
      </div>
    </section>
  );
}
