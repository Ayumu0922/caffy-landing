import Link from "next/link";

export default function PrivacyPolicy() {
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
          プライバシーポリシー
        </h1>
        <p className="text-gray-600 mb-12">最終更新日: 2025年1月1日</p>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. 収集する情報</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Caffy は、サービス提供のために以下の情報を収集します：
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>アカウント情報（名前、メールアドレス、生年月日、性別）</li>
              <li>プロフィール情報（プロフィール写真、自己紹介）</li>
              <li>投稿コンテンツ（写真、テキスト、位置情報）</li>
              <li>利用履歴（アクセスログ、検索履歴）</li>
              <li>デバイス情報（機種、OS、アプリバージョン）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. 情報の利用目的</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              収集した情報は以下の目的で利用されます：
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>サービスの提供・改善</li>
              <li>ユーザーサポート</li>
              <li>パーソナライズされた体験の提供</li>
              <li>統計分析とサービス向上</li>
              <li>法的要求への対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. 位置情報について</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>位置情報は、近くのカフェの検索や投稿の場所タグ付けに使用されます</li>
              <li>位置情報の利用は設定から無効にすることができます</li>
              <li>収集された位置情報は、個人を特定できない形で統計処理される場合があります</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. 情報の共有</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Caffy は、以下の場合を除き、個人情報を第三者と共有しません：
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>ユーザーの同意がある場合</li>
              <li>法的要求がある場合</li>
              <li>サービス提供に必要な業務委託先との共有</li>
              <li>統計的に処理された匿名情報の共有</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. データの保護</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>業界標準のセキュリティ対策を実施しています</li>
              <li>データは暗号化して保存・送信されます</li>
              <li>アクセス権限は必要最小限に制限されています</li>
              <li>定期的なセキュリティ監査を実施しています</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Cookie とトラッキング</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>サービス改善のために Cookie を使用しています</li>
              <li>アナリティクスツールによる利用状況の分析を行っています</li>
              <li>広告配信のための情報収集は行っていません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. 子供のプライバシー</h2>
            <p className="text-gray-700 leading-relaxed">
              13歳未満の方はサービスを利用できません。13歳未満の方の情報を意図的に収集することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">8. ユーザーの権利</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>自身の個人情報へのアクセス権</li>
              <li>個人情報の修正・削除権</li>
              <li>データポータビリティの権利</li>
              <li>処理に対する異議申し立て権</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">9. ポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed">
              このプライバシーポリシーは、必要に応じて変更されることがあります。重要な変更がある場合は、アプリ内またはメールでお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">10. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed">
              プライバシーに関するご質問やご懸念がある場合は、以下までお問い合わせください：
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
