import Link from "next/link";

export const metadata = {
  title: "Footie - サポート",
  description: "Footieアプリのサポートページ",
};

export default function FootieSupport() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              Ayumu Kubota
            </span>
          </Link>
          <Link
            href="/apps/footie"
            className="text-gray-400 hover:text-[#4CAF50] transition text-sm md:text-base"
          >
            Footie
          </Link>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          サポート
        </h1>
        <p className="text-gray-400 mb-12">Footie - 食事写真記録アプリ</p>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              お問い合わせ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Footieに関するご質問、不具合の報告、機能のご要望などがございましたら、
              以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
            <a
              href="mailto:caffy.help@gmail.com?subject=Footie%20-%20お問い合わせ"
              className="inline-flex items-center gap-3 border border-[#4CAF50] text-[#4CAF50] px-6 py-3 rounded-xl hover:bg-[#4CAF50] hover:text-white transition font-semibold"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              よくある質問
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Q. 写真はどこに保存されますか？
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A.
                  すべての写真とデータはお使いのデバイス内にローカル保存されます。
                  クラウドへのアップロードは行われないため、プライバシーが保護されます。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Q. 写真を削除するとどうなりますか？
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A.
                  アプリ内で写真の記録を削除しても、元の写真はデバイスのフォトライブラリに残ります。
                  Footieはあくまで写真のメタデータ（タグ、場所など）を管理するアプリです。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Q. 位置情報は必須ですか？
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A.
                  位置情報の使用は任意です。許可しなくても基本機能は使用できます。
                  位置情報を許可すると、マップ上で食事の記録を振り返ることができます。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Q. データのバックアップはできますか？
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A.
                  iCloudバックアップを有効にしている場合、アプリのデータは自動的にバックアップされます。
                  デバイスを変更しても、バックアップから復元することでデータを引き継げます。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              関連リンク
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apps/footie/privacy"
                className="text-[#4CAF50] hover:text-white transition"
              >
                プライバシーポリシー →
              </Link>
              <Link
                href="/apps/footie/terms"
                className="text-[#4CAF50] hover:text-white transition"
              >
                利用規約 →
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0a0a0a] transition font-semibold"
          >
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
