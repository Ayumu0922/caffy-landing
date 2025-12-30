"use client";

import Link from "next/link";
import RainbowBackground from "./RainbowBackground";
import Header from "./Header";
import { ReactNode } from "react";

export interface LegalSection {
  title: string;
  content: ReactNode;
}

export interface LegalPageInfo {
  appName: string;
  basePath: string;
  pageTitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

interface LegalPageTemplateProps {
  info: LegalPageInfo;
}

export default function LegalPageTemplate({ info }: LegalPageTemplateProps) {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      <RainbowBackground />
      <Header showAppLink={{ name: info.appName, href: info.basePath }} />

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-rainbow">{info.pageTitle}</span>
        </h1>
        <p className="text-gray-400 mb-12">最終更新日: {info.lastUpdated}</p>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8">
          {info.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {section.title}
              </h2>
              <div className="text-gray-300 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={`${info.basePath}/support`}
            className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-xl hover:bg-white/10 transition font-semibold text-white"
          >
            サポート
          </Link>
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
