"use client";

import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "写真をタグで整理",
    description: "食事の写真をタグ付けで簡単に整理。「#クリスマス」「#ランチ」など、自分だけのカテゴリで管理できます。",
    image: "/footie/Device-2.png",
  },
  {
    title: "マップで振り返り",
    description: "訪れたお店をマップ上で確認。どこで何を食べたか、思い出を地図と共に振り返れます。",
    image: "/footie/Device-3.png",
  },
  {
    title: "お好みのテーマで",
    description: "ダークモード・ライトモード対応。20種類以上のカラーテーマで、あなた好みにカスタマイズ。",
    image: "/footie/Device-4.png",
  },
  {
    title: "プライバシーを守る",
    description: "パスコードでアプリをロック。大切な思い出を安全に保護します。",
    image: "/footie/Device-1.png",
  },
];

export default function FootiePage() {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50">
        <nav className="mx-4 mt-4">
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <span className="text-sm font-bold text-white">AK</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Ayumu Kubota
              </span>
            </Link>
            <div className="flex items-center gap-4 md:gap-8">
              <Link
                href="/apps/footie/privacy"
                className="text-xs sm:text-sm text-gray-400 hover:text-[#4CAF50] transition"
              >
                プライバシー
              </Link>
              <Link
                href="/apps/footie/terms"
                className="text-xs sm:text-sm text-gray-400 hover:text-[#4CAF50] transition"
              >
                利用規約
              </Link>
              <Link
                href="/apps/footie/support"
                className="text-xs sm:text-sm text-gray-400 hover:text-[#4CAF50] transition"
              >
                サポート
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-green-500/30 rounded-3xl blur-2xl" />
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-white/20">
                  <Image
                    src="/footie_logo.png"
                    alt="Footie Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                  Footie
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8">
                日々の食事を写真で記録・整理するライフログアプリ
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-sm text-gray-300">Coming Soon</span>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  完全無料
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  オフライン対応
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  プライバシー重視
                </div>
              </div>
            </div>

            {/* Right: Device mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-[3rem] blur-3xl" />
                <div className="relative w-64 md:w-72 animate-float">
                  <Image
                    src="/footie/Device-2.png"
                    alt="Footie App Screenshot"
                    width={350}
                    height={700}
                    className="rounded-[2rem] shadow-2xl shadow-black/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-24 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-medium text-green-400 uppercase tracking-widest mb-4">
              Features
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white">
              シンプルで使いやすい機能
            </p>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className={`text-center lg:text-left ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 ring-1 ring-white/10 mb-6">
                    <span className="text-green-400 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </div>

                {/* Device Image */}
                <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-52 md:w-60 transform transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={300}
                        height={600}
                        className="rounded-[2rem] shadow-xl shadow-black/30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-24 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              もうすぐリリース
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Footieは現在開発中です。リリースをお楽しみに。
            </p>
            <Link
              href="/apps/footie/support"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg shadow-green-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link
                href="/apps/footie/privacy"
                className="text-gray-400 text-sm hover:text-green-400 transition"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/apps/footie/terms"
                className="text-gray-400 text-sm hover:text-green-400 transition"
              >
                利用規約
              </Link>
              <Link
                href="/apps/footie/support"
                className="text-gray-400 text-sm hover:text-green-400 transition"
              >
                サポート
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ayumu Kubota
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
