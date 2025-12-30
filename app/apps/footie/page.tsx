import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Footie - 食事写真記録アプリ",
  description: "日々の食事を写真で記録・整理するライフログアプリ",
};

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
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-green-500/30 rounded-3xl blur-2xl" />
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden ring-1 ring-white/20">
              <Image
                src="/footie_logo.png"
                alt="Footie Logo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              Footie
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            日々の食事を写真で記録・整理するライフログアプリ
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-16">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-300">Coming Soon</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="glass-card rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-4 ring-1 ring-white/10">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                写真で記録
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                フォトライブラリから食事の写真を自動認識。タグ付けで簡単に整理。
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-4 ring-1 ring-white/10">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                マップで振り返り
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                訪れたお店をマップ上で確認。お気に入りの場所を見つけよう。
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center mb-4 ring-1 ring-white/10">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                プライバシー重視
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                すべてのデータはデバイス内に保存。外部サーバーへの送信なし。
              </p>
            </div>
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
