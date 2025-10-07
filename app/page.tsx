import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50/30 to-pink-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">☕</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Caffy
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-pink-500 transition">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-pink-500 transition">
              利用規約
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            あなたのカフェライフを
            <br />
            もっと豊かに
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            訪れたカフェ、味わったコーヒー、特別な瞬間を Caffy で記録しましょう。
            <br />
            カフェ好きのためのライフスタイルアプリです。
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://apps.apple.com/jp/app/caffy"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition shadow-lg"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.caffy.app"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition shadow-lg"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholder for app screenshots */}
                <div className="aspect-[9/19] bg-gradient-to-br from-pink-100 to-orange-100/50 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <div className="aspect-[9/19] bg-gradient-to-br from-orange-100/50 to-pink-100 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">☕</span>
                </div>
                <div className="aspect-[9/19] bg-gradient-to-br from-pink-100 to-orange-100/50 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">🗺️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Caffy で変わる毎日
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">記録する</h3>
              <p className="text-gray-600 leading-relaxed">
                カフェでの素敵な瞬間を写真と一緒に記録。メニュー、雰囲気、同伴者など、詳細な情報も保存できます。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-orange-50/50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">発見する</h3>
              <p className="text-gray-600 leading-relaxed">
                マップ機能で近くのカフェを探索。友達の投稿から新しいお気に入りのお店を見つけましょう。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-200 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">共有する</h3>
              <p className="text-gray-600 leading-relaxed">
                カフェ好きな仲間とつながり、お気に入りのお店やおすすめメニューを共有しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 via-orange-50/30 to-pink-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            あなただけのテーマカラー
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            30種類以上のカフェ系カラーテーマから、あなたの好みに合わせてカスタマイズ
          </p>

          {/* Theme Color Samples */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="w-20 h-20 rounded-full bg-[rgb(223,190,168)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(202,195,192)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(185,215,175)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(235,160,180)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(240,205,215)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(170,220,200)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(230,215,130)] shadow-lg"></div>
            <div className="w-20 h-20 rounded-full bg-[rgb(235,200,140)] shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            今すぐ始めよう
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Caffy で、あなたの素敵なカフェ体験を記録・共有・発見しましょう
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/jp/app/caffy"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-10 py-5 rounded-xl hover:shadow-xl transition text-lg font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store からダウンロード
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.caffy.app"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-5 rounded-xl hover:shadow-xl transition text-lg font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play からダウンロード
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">☕</span>
                </div>
                <span className="text-2xl font-bold">Caffy</span>
              </div>
              <p className="text-gray-400">
                あなたのカフェライフを
                <br />
                もっと豊かに
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">リンク</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-pink-400 transition">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-pink-400 transition">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/legal/specified-commercial-transaction" className="hover:text-pink-400 transition">
                    特定商取引法に基づく表記
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <p className="text-gray-400">
                <a href="mailto:support@caffy.app" className="hover:text-pink-400 transition">
                  support@caffy.app
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Caffy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
