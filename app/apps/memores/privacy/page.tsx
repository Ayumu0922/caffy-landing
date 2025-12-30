import Link from "next/link";

export const metadata = {
  title: "Memores - プライバシーポリシー",
  description: "Memoresアプリのプライバシーポリシー",
};

export default function MemoresPrivacy() {
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
            href="/apps/memores"
            className="text-gray-400 hover:text-[#4CAF50] transition text-sm md:text-base"
          >
            Memores
          </Link>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          プライバシーポリシー
        </h1>
        <p className="text-gray-400 mb-12">最終更新日: 2025年1月1日</p>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              概要
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Memores（以下「本アプリ」）は、ユーザーのプライバシーを最優先に設計されています。
              本アプリはすべてのデータをお使いのデバイス内にローカル保存し、
              外部サーバーへのデータ送信は一切行いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              1. 収集する情報
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリは以下の情報をデバイス内にのみ保存します：
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">
              1.1 写真へのアクセス
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>デバイスのフォトライブラリへの読み取りアクセス</li>
              <li>写真のメタデータ（撮影日時、位置情報など）</li>
              <li>
                写真自体はフォトライブラリに保存されたまま、コピーは作成されません
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">
              1.2 位置情報（任意）
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>写真の撮影場所情報（写真のメタデータから取得）</li>
              <li>手動で追加した場所情報</li>
              <li>
                位置情報の使用は任意であり、許可しなくても基本機能は使用できます
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">
              1.3 ユーザー入力情報
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>タグ、カテゴリ、メモなどの分類情報</li>
              <li>アルバム情報</li>
              <li>アプリ設定（テーマ、表示設定など）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              2. データの保存場所
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              すべてのデータはお使いのデバイス内のローカルデータベース（SQLite）に保存されます。
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>
                <strong>外部サーバーへの送信なし：</strong>
                データはインターネット経由で送信されません
              </li>
              <li>
                <strong>クラウド同期なし：</strong>
                他のデバイスとの同期機能はありません
              </li>
              <li>
                <strong>iCloudバックアップ：</strong>
                iCloudバックアップを有効にしている場合、アプリのデータはAppleのiCloudにバックアップされる可能性があります
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              3. 第三者サービス
            </h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">
              3.1 Google Places API（任意）
            </h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>場所検索機能を使用する場合のみ、Googleに検索クエリが送信されます</li>
              <li>場所検索を使用しない場合、外部サービスへの通信は発生しません</li>
              <li>
                プライバシーポリシー：
                <a
                  href="https://policies.google.com/privacy"
                  className="text-[#4CAF50] hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              <strong>重要：</strong>
              本アプリは第三者のアナリティクスツール（Google
              Analytics、Facebookピクセルなど）や
              広告SDKを一切使用していません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              4. データの削除
            </h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>
                アプリ内で記録を削除すると、関連するメタデータはデバイスから完全に削除されます
              </li>
              <li>
                元の写真はデバイスのフォトライブラリに残り、影響を受けません
              </li>
              <li>
                アプリをアンインストールすると、すべてのアプリデータが削除されます
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              5. 子供のプライバシー
            </h2>
            <p className="text-gray-300 leading-relaxed">
              本アプリは全年齢向けに設計されています。個人情報を収集しないため、
              13歳未満のお子様でも安全にご利用いただけます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              6. ポリシーの変更
            </h2>
            <p className="text-gray-300 leading-relaxed">
              本プライバシーポリシーは必要に応じて変更されることがあります。
              重要な変更がある場合は、アプリのアップデート時にお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              7. お問い合わせ
            </h2>
            <p className="text-gray-300 leading-relaxed">
              プライバシーに関するご質問やお問い合わせは、以下までご連絡ください：
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
            href="/apps/memores/support"
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
