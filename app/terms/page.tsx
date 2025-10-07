import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50/30 to-pink-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">☕</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Caffy
            </span>
          </Link>
          <Link href="/" className="text-gray-600 hover:text-pink-500 transition">
            ホームに戻る
          </Link>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          利用規約
        </h1>
        <p className="text-gray-600 mb-12">最終更新日: 2025年1月1日</p>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. サービスの利用</h2>
            <p className="text-gray-700 leading-relaxed">
              Caffy は、カフェ体験を記録・共有するためのソーシャルプラットフォームです。本サービスを利用することで、以下の条件に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. アカウント登録</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>13歳以上の方のみご利用いただけます</li>
              <li>登録情報は正確かつ最新の状態を保つ必要があります</li>
              <li>パスワードの管理は利用者の責任となります</li>
              <li>不正なアカウント作成は禁止されています</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. コンテンツの投稿</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>投稿されたコンテンツの著作権は投稿者に帰属します</li>
              <li>Caffy は投稿されたコンテンツを使用する権利を有します</li>
              <li>違法、有害、または不適切なコンテンツの投稿は禁止されています</li>
              <li>他者の著作権を侵害するコンテンツの投稿は禁止されています</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. プライバシー</h2>
            <p className="text-gray-700 leading-relaxed">
              個人情報の取り扱いについては、別途定める
              <Link href="/privacy" className="text-pink-500 hover:text-orange-500 transition font-semibold">
                プライバシーポリシー
              </Link>
              に従います。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. 禁止事項</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>他のユーザーへの嫌がらせや誹謗中傷</li>
              <li>スパムや商業的な勧誘</li>
              <li>システムへの不正アクセスや妨害行為</li>
              <li>虚偽の情報の拡散</li>
              <li>その他、運営が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. サービスの変更・終了</h2>
            <p className="text-gray-700 leading-relaxed">
              Caffy は、予告なくサービス内容を変更または終了する場合があります。これによって生じた損害について、Caffy は責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. 免責事項</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Caffy は、サービスの完全性、正確性、有用性を保証しません</li>
              <li>ユーザー間のトラブルについて、Caffy は責任を負いません</li>
              <li>サービスの利用により生じた損害について、Caffy は責任を負いません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">8. アカウントの停止・削除</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              以下の場合、アカウントを停止または削除することがあります：
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>利用規約に違反した場合</li>
              <li>長期間利用がない場合</li>
              <li>不正な利用が確認された場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">9. 知的財産権</h2>
            <p className="text-gray-700 leading-relaxed">
              Caffy のサービス、ロゴ、デザインなどの知的財産権は、Caffy または正当な権利者に帰属します。無断使用は禁止されています。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">10. 準拠法</h2>
            <p className="text-gray-700 leading-relaxed">
              この利用規約は日本法に準拠し、解釈されます。紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">11. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed">
              利用規約に関するご質問は、以下までお問い合わせください：
            </p>
            <p className="text-pink-500 font-semibold mt-4">
              <a href="mailto:support@caffy.app" className="hover:text-orange-500 transition">
                support@caffy.app
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:shadow-xl transition font-semibold"
          >
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
