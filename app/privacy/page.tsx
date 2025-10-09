import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="fixed top-0 w-full bg-[#0a0a0a] border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="/caffy_logo.png"
              alt="Caffy Logo"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              Caffy
            </span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-[#C4A574] transition text-sm md:text-base">
            ホームに戻る
          </Link>
        </nav>
      </header>

      <div className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          プライバシーポリシー
        </h1>
        <p className="text-gray-400 mb-12">最終更新日: 2025年1月9日</p>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">1. 収集する情報</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Caffy は、サービス提供のために以下の情報を収集します：
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.1 アカウント情報</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>メールアドレス（必須）</li>
              <li>ユーザー名、ハンドル名（@ユーザー名）</li>
              <li>認証プロバイダー情報（Apple ID、Google IDなど）</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.2 プロフィール情報（任意）</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>プロフィール写真、背景画像</li>
              <li>自己紹介文（最大500文字）</li>
              <li>年齢層（10代、20代、30代など）</li>
              <li>性別</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.3 位置情報</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>現在地（緯度・経度）- 近くのカフェ検索とマップ表示に使用</li>
              <li>カフェの位置情報（投稿時に保存）</li>
              <li>位置情報は「使用中のみ」収集され、バックグラウンド追跡は行いません</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.4 写真・メディアデータ</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>カメラで撮影した写真（カフェ、料理、メニューなど）</li>
              <li>フォトライブラリからの写真（プレミアム機能）</li>
              <li>最大10枚/投稿、最大10MB/画像</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.5 投稿コンテンツ</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>カフェのレビュー、評価（1-5つ星）</li>
              <li>訪問日、感想文</li>
              <li>メニュー情報（名前、価格、説明）</li>
              <li>タグ、同伴者情報</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.6 利用履歴</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>検索履歴（検索クエリ、検索結果）</li>
              <li>投稿閲覧履歴（IPアドレス、ユーザーエージェントを含む可能性があります）</li>
              <li>いいね、保存、フォロー履歴</li>
              <li>アプリ設定、テーマ設定</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">1.7 決済情報</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>Stripe決済情報（カード情報はStripeが管理し、Caffyは保存しません）</li>
              <li>サブスクリプション状態（無料、プレミアム）</li>
              <li>請求履歴（金額、日付、ステータス）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">2. 情報の利用目的</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              収集した情報は以下の目的で利用されます：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>カフェ投稿、レビュー、評価などの基本機能の提供</li>
              <li>マップ機能による近くのカフェ検索</li>
              <li>ソーシャル機能（友達、いいね、保存）の提供</li>
              <li>パーソナライズされたおすすめコンテンツの表示</li>
              <li>サブスクリプション決済の処理</li>
              <li>アプリの改善とバグ修正</li>
              <li>ユーザーサポートの提供</li>
              <li>法的要求への対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">3. 第三者サービスとの情報共有</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Caffy は、サービス提供のために以下の第三者サービスと情報を共有します：
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.1 Supabase（バックエンドインフラ）</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>共有する情報：すべてのユーザーデータ（アカウント、投稿、写真など）</li>
              <li>目的：データベース、認証、ストレージサービスの提供</li>
              <li>プライバシーポリシー：<a href="https://supabase.com/privacy" className="text-[#C4A574] hover:text-white transition">https://supabase.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.2 Stripe（決済処理）</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>共有する情報：メールアドレス、ユーザーID、サブスクリプション情報</li>
              <li>目的：プレミアムサブスクリプションの決済処理</li>
              <li>注：クレジットカード情報はCaffyに保存されず、Stripeが直接管理します</li>
              <li>プライバシーポリシー：<a href="https://stripe.com/privacy" className="text-[#C4A574] hover:text-white transition">https://stripe.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.3 Google Maps / Places API</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>共有する情報：現在地、検索クエリ</li>
              <li>目的：マップ表示、カフェ検索、位置情報サービス</li>
              <li>プライバシーポリシー：<a href="https://policies.google.com/privacy" className="text-[#C4A574] hover:text-white transition">https://policies.google.com/privacy</a></li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.4 認証プロバイダー</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>Apple Sign-In：Apple ID、メールアドレス（任意）、名前（任意）</li>
              <li>Google Sign-In：Google ID、メールアドレス、名前、プロフィール写真（任意）</li>
              <li>認証時のみ情報を共有し、サインイン完了後は共有されません</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              <strong>データ販売について：</strong>Caffyは、ユーザーの個人情報を第三者に販売することは一切ありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">4. 公開される情報</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              以下の情報は、プライバシー設定に応じて他のユーザーに公開される可能性があります：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li><strong>公開プロフィール：</strong>ユーザー名、プロフィール写真、自己紹介</li>
              <li><strong>公開投稿：</strong>カフェレビュー、写真、評価、メニュー情報、位置情報</li>
              <li><strong>ソーシャル情報：</strong>友達リスト、いいね、保存（プライバシー設定による）</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>プライバシー設定：</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li><strong>全員に公開：</strong>すべてのユーザーがプロフィールと投稿を閲覧可能</li>
              <li><strong>友達のみ：</strong>友達のみがプロフィールと投稿を閲覧可能</li>
              <li><strong>非公開：</strong>自分のみがプロフィールと投稿を閲覧可能</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">5. データの保護</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>すべての通信はHTTPSで暗号化されます</li>
              <li>データベースは暗号化されて保存されます</li>
              <li>行レベルセキュリティ（RLS）により、ユーザーは自分のデータのみアクセス可能</li>
              <li>パスワードは安全にハッシュ化されて保存されます（bcrypt）</li>
              <li>OAuth認証（Apple、Google）によるセキュアなサインイン</li>
              <li>アクセス権限は必要最小限に制限されています</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">6. データの保持期間</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>アカウント情報：アカウント削除まで保持</li>
              <li>投稿データ：投稿削除またはアカウント削除まで保持</li>
              <li>検索履歴：アカウント削除まで保持（手動削除可能）</li>
              <li>決済履歴：法律で定められた期間保持</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">7. アナリティクスとトラッキング</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Caffyは、サービス改善のために以下の情報を収集します：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>投稿の閲覧履歴（ユーザーID、投稿ID、タイムスタンプ、IPアドレス、ユーザーエージェント）</li>
              <li>検索クエリと結果</li>
              <li>いいね、保存、シェアなどのエンゲージメントデータ</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong>重要：</strong>Caffyは、第三者のアナリティクスツール（Google Analytics、Facebookピクセルなど）や広告SDKを使用していません。すべてのデータ収集は、アプリ内の機能向上のみに使用されます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">8. 子供のプライバシー</h2>
            <p className="text-gray-300 leading-relaxed">
              Caffyは13歳以上の方を対象としています。13歳未満の方の個人情報を意図的に収集することはありません。13歳未満のお子様が個人情報を提供したことが判明した場合、速やかに削除いたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">9. ユーザーの権利と管理</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ユーザーは、以下の権利を有します：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li><strong>アクセス権：</strong>自身のプロフィールと投稿データを閲覧できます</li>
              <li><strong>修正権：</strong>プロフィール情報や投稿を編集できます</li>
              <li><strong>削除権：</strong>個別の投稿やアカウント全体を削除できます</li>
              <li><strong>プライバシー管理：</strong>プロフィールの公開範囲を設定できます（全員/友達のみ/非公開）</li>
              <li><strong>通知管理：</strong>プッシュ通知やメール通知の設定を変更できます</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-6">
              <strong>アカウント削除：</strong>アカウントを削除すると、以下のデータが完全に削除されます：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>プロフィール情報とプロフィール画像</li>
              <li>すべての投稿と写真</li>
              <li>友達関係、いいね、保存履歴</li>
              <li>検索履歴とアクティビティ履歴</li>
              <li>サブスクリプション情報</li>
              <li>ストレージ内のすべての画像ファイル</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">10. ポリシーの変更</h2>
            <p className="text-gray-300 leading-relaxed">
              このプライバシーポリシーは、必要に応じて変更されることがあります。重要な変更がある場合は、アプリ内通知またはメールでお知らせします。変更後もサービスを継続して利用される場合、変更内容に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">11. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              プライバシーに関するご質問、データアクセスのリクエスト、その他のお問い合わせは、以下までご連絡ください：
            </p>
            <p className="text-[#C4A574] font-semibold mt-4">
              <a href="mailto:caffy.help@gmail.com" className="hover:text-white transition">
                caffy.help@gmail.com
              </a>
            </p>
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
