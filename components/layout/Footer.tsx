import Link from "next/link";
import Image from "next/image";

const STUDENT_SITE_URL = process.env.NEXT_PUBLIC_STUDENT_SITE_URL ?? "https://student.boundai.tech";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/contents/logos/brand.svg"
                alt="BOUND"
                width={120}
                height={20}
                className="h-5 w-auto invert"
              />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              実務体験ジョブチャレンジで
              <br />
              就活を変える
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">学生向け</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`${STUDENT_SITE_URL}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  無料で登録
                </a>
              </li>
              <li>
                <a
                  href={`${STUDENT_SITE_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  ログイン
                </a>
              </li>
              <li>
                <a
                  href="https://luck-caboc-0bc.notion.site/BOUND-32e065fb3042817aa675da9580e3f51d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  利用規約
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">企業の方へ</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.boundai.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  企業向けサービス
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} BOUND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
