"use client";

import Link from "next/link";
import RainbowBackground from "./RainbowBackground";
import Header from "./Header";

export interface FAQ {
  question: string;
  answer: string;
}

export interface SupportPageInfo {
  appName: string;
  appDescription: string;
  basePath: string;
  faqs: FAQ[];
}

interface SupportPageTemplateProps {
  info: SupportPageInfo;
}

export default function SupportPageTemplate({ info }: SupportPageTemplateProps) {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      <RainbowBackground />
      <Header showAppLink={{ name: info.appName, href: info.basePath }} />

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-rainbow">サポート</span>
        </h1>
        <p className="text-gray-400 mb-12">
          {info.appName} - {info.appDescription}
        </p>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              お問い合わせ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {info.appName}
              に関するご質問、不具合の報告、機能のご要望などがございましたら、
              以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
            <a
              href={`mailto:caffy.help@gmail.com?subject=${encodeURIComponent(
                `${info.appName} - お問い合わせ`
              )}`}
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              caffy.help@gmail.com
            </a>
          </section>

          {info.faqs.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                よくある質問
              </h2>

              <div className="space-y-6">
                {info.faqs.map((faq, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm glow-rainbow">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              関連リンク
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`${info.basePath}/privacy`}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition group"
              >
                プライバシーポリシー
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href={`${info.basePath}/terms`}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition group"
              >
                利用規約
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-xl hover:bg-white/10 transition font-semibold text-white"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
