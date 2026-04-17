import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOUND - 実務体験ジョブチャレンジで就活を変える",
  description:
    "企業のリアルな課題に挑戦し、スキルと可能性を証明しよう。AIと一緒に取り組む実務体験型ジョブチャレンジ。",
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
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
