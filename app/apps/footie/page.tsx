import Link from "next/link";

export const metadata = {
  title: "Footie - 食事写真記録アプリ",
  description: "日々の食事を写真で記録・整理するライフログアプリ",
};

export default function FootiePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] flex items-center justify-center">
            <span className="text-4xl font-bold text-white">F</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Footie
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            日々の食事を写真で記録・整理するライフログアプリ
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
              Coming Soon
            </span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                写真で記録
              </h3>
              <p className="text-gray-400 text-sm">
                フォトライブラリから食事の写真を自動認識。タグ付けで簡単に整理。
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                マップで振り返り
              </h3>
              <p className="text-gray-400 text-sm">
                訪れたお店をマップ上で確認。お気に入りの場所を見つけよう。
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4CAF50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                プライバシー重視
              </h3>
              <p className="text-gray-400 text-sm">
                すべてのデータはデバイス内に保存。外部サーバーへの送信なし。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="/apps/footie/privacy"
              className="text-gray-400 text-sm hover:text-[#4CAF50] transition"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/apps/footie/terms"
              className="text-gray-400 text-sm hover:text-[#4CAF50] transition"
            >
              利用規約
            </Link>
            <Link
              href="/apps/footie/support"
              className="text-gray-400 text-sm hover:text-[#4CAF50] transition"
            >
              サポート
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ayumu Kubota
          </p>
        </div>
      </footer>
    </main>
  );
}
