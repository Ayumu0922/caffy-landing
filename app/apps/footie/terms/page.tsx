import Link from "next/link";

export const metadata = {
  title: "Footie - 利用規約",
  description: "Footieアプリの利用規約",
};

export default function FootieTerms() {
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
          利用規約
        </h1>
        <p className="text-gray-400 mb-12">最終更新日: 2025年1月1日</p>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              1. 規約への同意
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Footie（以下「本アプリ」）は、食事の写真を記録・整理するためのアプリケーションです。
              本アプリを利用することで、本利用規約および
              <Link
                href="/apps/footie/privacy"
                className="text-[#4CAF50] hover:text-white transition"
              >
                プライバシーポリシー
              </Link>
              に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              2. サービスの概要
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリは以下の機能を提供します：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>デバイスのフォトライブラリにある食事写真の閲覧・整理</li>
              <li>写真へのタグ、カテゴリ、メモの追加</li>
              <li>アルバム機能による写真のグループ化</li>
              <li>マップ上での写真表示</li>
              <li>カレンダービューでの振り返り</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              3. 利用条件
            </h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">
              3.1 必要な権限
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>写真ライブラリへのアクセス：</strong>
                本アプリの基本機能には、フォトライブラリへのアクセス権限が必要です
              </li>
              <li>
                <strong>位置情報（任意）：</strong>
                マップ機能を使用する場合、位置情報へのアクセスが必要です
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">
              3.2 禁止事項
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>本アプリのリバースエンジニアリング、改変、再配布</li>
              <li>本アプリを使用した違法行為</li>
              <li>本アプリの運営を妨害する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              4. 知的財産権
            </h2>
            <p className="text-gray-300 leading-relaxed">
              本アプリ、ロゴ、デザイン、ソフトウェアなどの知的財産権は、開発者に帰属します。
              ユーザーの写真やデータの所有権はユーザーに帰属し、
              本アプリはそれらへのアクセス権を得るのみで、所有権を主張しません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              5. 免責事項
            </h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>
                本アプリは「現状有姿」で提供され、完全性、正確性、有用性について保証しません
              </li>
              <li>
                データの損失、破損、または誤動作について責任を負いません
              </li>
              <li>
                本アプリの使用によって生じた直接的・間接的な損害について責任を負いません
              </li>
              <li>
                定期的なバックアップをお勧めします
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              6. サービスの変更・終了
            </h2>
            <p className="text-gray-300 leading-relaxed">
              開発者は、事前通知なくアプリの機能を変更、一時停止、または終了する権利を留保します。
              ただし、ユーザーのデータはデバイス内に保存されているため、
              アプリの終了後もiCloudバックアップなどから復元可能な場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              7. プライバシー
            </h2>
            <p className="text-gray-300 leading-relaxed">
              個人情報の取り扱いについては、別途定める
              <Link
                href="/apps/footie/privacy"
                className="text-[#4CAF50] hover:text-white transition font-semibold"
              >
                プライバシーポリシー
              </Link>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              8. 準拠法と管轄
            </h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は日本法に準拠し、解釈されます。本アプリまたは本規約に関する紛争が生じた場合、
              東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              9. 規約の変更
            </h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は必要に応じて変更されることがあります。
              重要な変更がある場合は、アプリのアップデート時にお知らせします。
              変更後もアプリを継続して利用される場合、変更内容に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              10. お問い合わせ
            </h2>
            <p className="text-gray-300 leading-relaxed">
              本規約に関するご質問やお問い合わせは、以下までご連絡ください：
            </p>
            <p className="mt-4">
              <a
                href="mailto:caffy.help@gmail.com"
                className="text-[#4CAF50] font-semibold hover:text-white transition"
              >
                caffy.help@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/apps/footie/support"
            className="inline-flex items-center gap-2 border border-[#4CAF50] text-[#4CAF50] px-8 py-4 rounded-xl hover:bg-[#4CAF50] hover:text-white transition font-semibold"
          >
            サポート
          </Link>
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
