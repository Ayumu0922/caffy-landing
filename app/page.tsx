"use client";

import Link from "next/link";
import Image from "next/image";
import { RainbowBackground, Header, Footer } from "./components";

const apps = [
  {
    name: "Caffy",
    description: "カフェ巡りを記録・共有するソーシャルアプリ",
    logo: "/caffy_logo.png",
    href: "/apps/caffy",
    appStore: "https://apps.apple.com/jp/app/caffy",
  },
  {
    name: "Memores",
    description: "大切な思い出を写真で記録・整理するライフログアプリ",
    logo: "/memores_logo.png",
    href: "/apps/memores",
    appStore: null,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      <RainbowBackground />
      <Header showContactEmail />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-12 pt-32 relative z-10">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              Available for freelance work
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-rainbow">Ayumu Kubota</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-4 font-light">
            iOS App Developer
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            日常をより豊かにするアプリを開発しています
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="px-6 md:px-12 py-24 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
              Portfolio
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white">My Apps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {apps.map((app) => (
              <Link key={app.name} href={app.href} className="group relative">
                {/* Rainbow glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl glow-rainbow" />

                <div className="glass-card rounded-3xl p-8 relative transition-all duration-500 group-hover:translate-y-[-4px] border-rainbow">
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                        <Image
                          src={app.logo}
                          alt={`${app.name} Logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {!app.appStore && (
                        <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full ring-1 ring-white/10">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {app.description}
                    </p>

                    <div className="flex items-center text-gray-500 group-hover:text-white/70 transition-colors text-sm">
                      <span>View details</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
