"use client";

import Link from "next/link";
import Image from "next/image";

const apps = [
  {
    name: "Caffy",
    description: "カフェ巡りを記録・共有するソーシャルアプリ",
    logo: "/caffy_logo.png",
    href: "/apps/caffy",
    color: "#C4A574",
    gradientFrom: "from-amber-500/20",
    gradientTo: "to-orange-600/20",
    glowColor: "rgba(196, 165, 116, 0.3)",
    appStore: "https://apps.apple.com/jp/app/caffy",
  },
  {
    name: "Footie",
    description: "食事の写真を記録・整理するライフログアプリ",
    logo: "/footie_logo.png",
    href: "/apps/footie",
    color: "#4CAF50",
    gradientFrom: "from-green-500/20",
    gradientTo: "to-emerald-600/20",
    glowColor: "rgba(76, 175, 80, 0.3)",
    appStore: null,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50">
        <nav className="mx-4 mt-4">
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <span className="text-sm font-bold text-white">AK</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Ayumu Kubota
              </span>
            </div>
            <a
              href="mailto:caffy.help@gmail.com"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-12 pt-32 relative z-10">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Available for freelance work</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Ayumu Kubota
            </span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-4 font-light">
            iOS App Developer
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            日常をより豊かにするアプリを開発しています
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
            <p className="text-3xl md:text-4xl font-bold text-white">
              My Apps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {apps.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: app.glowColor }}
                />

                <div className="glass-card rounded-3xl p-8 relative transition-all duration-500 group-hover:translate-y-[-4px]">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${app.gradientFrom} ${app.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

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
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              © {new Date().getFullYear()} Ayumu Kubota. All rights reserved.
            </p>
            <a
              href="mailto:caffy.help@gmail.com"
              className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              caffy.help@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
