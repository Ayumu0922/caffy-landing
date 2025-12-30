import Link from "next/link";

export const metadata = {
  title: "Memores - サポート",
  description: "Memoresアプリのサポートページ",
};

export default function MemoresSupport() {
  return (
    <main className="min-h-screen gradient-bg noise-overlay">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
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
            <Link
              href="/apps/memores"
              className="text-gray-400 hover:text-green-400 transition text-sm md:text-base"
            >
              Memores
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            サポート
          </span>
        </h1>
        <p className="text-gray-400 mb-12">Memores - 食事写真記録アプリ</p>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              お問い合わせ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Memoresに関するご質問、不具合の報告、機能のご要望などがございましたら、
              以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
            <a
              href="mailto:caffy.help@gmail.com?subject=Memores%20-%20お問い合わせ"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg shadow-green-500/25"
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

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              よくある質問
            </h2>

            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm">Q</span>
                  写真はどこに保存されますか？
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  すべての写真とデータはお使いのデバイス内にローカル保存されます。
                  クラウドへのアップロードは行われないため、プライバシーが保護されます。
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm">Q</span>
                  写真を削除するとどうなりますか？
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  アプリ内で写真の記録を削除しても、元の写真はデバイスのフォトライブラリに残ります。
                  Memoresはあくまで写真のメタデータ（タグ、場所など）を管理するアプリです。
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm">Q</span>
                  位置情報は必須ですか？
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  位置情報の使用は任意です。許可しなくても基本機能は使用できます。
                  位置情報を許可すると、マップ上で食事の記録を振り返ることができます。
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm">Q</span>
                  データのバックアップはできますか？
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  iCloudバックアップを有効にしている場合、アプリのデータは自動的にバックアップされます。
                  デバイスを変更しても、バックアップから復元することでデータを引き継げます。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              関連リンク
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apps/memores/privacy"
                className="inline-flex items-center gap-2 text-green-400 hover:text-white transition group"
              >
                プライバシーポリシー
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/apps/memores/terms"
                className="inline-flex items-center gap-2 text-green-400 hover:text-white transition group"
              >
                利用規約
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
