import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "BOUND ナビゲーター | 実務体験ジョブチャレンジで学びと働くを繋ぐ",
  description:
    "学びと働くのギャップを埋める。企業のリアルな課題に挑戦しながら、業界・職種の解像度を上げ、自分に合ったキャリアを見つける新しい就活体験。",
  icons: {
    icon: [{ url: "/favicon-tab.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-tab.svg",
    apple: "/favicon-tab.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
