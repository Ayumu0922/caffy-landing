import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
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
          利用規約
        </h1>
        <p className="text-gray-400 mb-12">最終更新日: 2025年1月9日</p>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">1. 規約への同意</h2>
            <p className="text-gray-300 leading-relaxed">
              Caffy（以下「本サービス」）は、カフェ体験を記録・共有するためのソーシャルプラットフォームです。本サービスを利用することで、本利用規約および<Link href="/privacy" className="text-[#C4A574] hover:text-white transition">プライバシーポリシー</Link>に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">2. 利用資格とアカウント登録</h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">2.1 年齢制限</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>本サービスは13歳以上の方のみご利用いただけます</li>
              <li>18歳未満の方は、保護者の同意を得た上でご利用ください</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">2.2 アカウント登録</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>メールアドレス、Apple ID、またはGoogleアカウントで登録できます</li>
              <li>登録情報は正確かつ最新の状態を保つ必要があります</li>
              <li>ユーザー名は2〜30文字、ハンドル名は英数字とアンダースコアのみ使用可能です</li>
              <li>1人につき1つのアカウントのみ作成できます</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">2.3 アカウントのセキュリティ</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>パスワードの管理は利用者の責任となります</li>
              <li>アカウントの不正使用を発見した場合は、速やかにご連絡ください</li>
              <li>アカウントで行われたすべての活動は、アカウント所有者の責任となります</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">3. ユーザー生成コンテンツ</h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.1 コンテンツの所有権</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>投稿されたコンテンツ（写真、レビュー、評価など）の著作権は投稿者に帰属します</li>
              <li>投稿することで、Caffyに対して以下のライセンスを付与するものとします：</li>
              <li className="ml-4">- アプリ内での表示、保存、配信のための非独占的、全世界的、ロイヤリティフリーのライセンス</li>
              <li className="ml-4">- サムネイル、圧縮版などの派生物作成の権利</li>
              <li className="ml-4">- サービス宣伝のための使用（適切な表示と共に）</li>
              <li>コンテンツを削除すると、このライセンスは終了します</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.2 投稿できるコンテンツ</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>カフェのレビューと評価（1〜5つ星）</li>
              <li>カフェ、料理、メニューの写真（最大10枚/投稿、10MB/画像）</li>
              <li>訪問日、感想文（最大500文字）</li>
              <li>メニュー情報、価格、説明</li>
              <li>タグ、同伴者情報</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.3 禁止コンテンツ</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              以下のコンテンツの投稿は禁止されています：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>違法、有害、脅迫的、または攻撃的なコンテンツ</li>
              <li>他者の著作権、商標権、その他の知的財産権を侵害するコンテンツ</li>
              <li>虚偽または誤解を招く情報</li>
              <li>個人情報やプライバシーを侵害するコンテンツ</li>
              <li>スパム、宣伝、または商業的な勧誘</li>
              <li>わいせつ、ポルノ、または不適切な性的コンテンツ</li>
              <li>ヘイトスピーチ、差別的な表現</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.4 コンテンツの責任</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>投稿するコンテンツについて、ユーザーが単独で責任を負います</li>
              <li>投稿者は、コンテンツを投稿する権利を有することを保証します</li>
              <li>Caffyは、コンテンツの正確性、品質、適法性について保証しません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">4. プレミアムサブスクリプション</h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.1 プレミアムプラン</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              プレミアムプランは、以下の2つの課金プランからお選びいただけます：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li><strong>月額プラン：</strong>¥500/月（自動更新）</li>
              <li><strong>年額プラン：</strong>¥5,000/年（自動更新、月約417円で2ヶ月分お得）</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.2 プレミアム機能</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li><strong>テーマカラーカスタマイズ：</strong>30種類以上の豊富なテーマカラーから選択可能</li>
              <li><strong>カレンダーカスタマイズ：</strong>カレンダーアイコン変更、背景画像設定</li>
              <li><strong>投稿カスタマイズ：</strong>フォトライブラリから写真アップロード可能、最大5枚までの写真投稿、投稿の編集機能</li>
              <li><strong>詳細なランキング：</strong>同世代・同性に人気のカフェなど詳細なランキングを閲覧可能</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.3 支払いと自動更新</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>支払いはStripeを通じて処理されます（クレジットカード、Apple Pay対応）</li>
              <li>サブスクリプションはキャンセルするまで自動更新されます</li>
              <li>料金は各請求期間の開始時に請求されます（月額：毎月、年額：毎年）</li>
              <li>料金変更の場合、少なくとも30日前に通知します</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.4 キャンセルと返金</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>サブスクリプションはいつでもStripeカスタマーポータルからキャンセルできます</li>
              <li>キャンセル後も、現在の請求期間終了までプレミアム機能をご利用いただけます</li>
              <li>返金は原則として行われません（法律で義務付けられている場合を除く）</li>
              <li>未使用期間に対する日割り計算や部分返金は行われません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">5. 禁止行為</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              以下の行為は禁止されています：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>他のユーザーへの嫌がらせ、誹謗中傷、脅迫、ストーカー行為</li>
              <li>他者の知的財産権、プライバシー権、その他の権利を侵害する行為</li>
              <li>虚偽の情報を投稿または拡散する行為</li>
              <li>スパム、宣伝、または商業的な勧誘（許可されている場合を除く）</li>
              <li>不正な方法でサービスにアクセスする行為（ハッキング、リバースエンジニアリング等）</li>
              <li>自動化されたツール（ボット、スクレイパー等）を使用する行為</li>
              <li>複数のアカウントを作成する行為</li>
              <li>他人になりすます行為</li>
              <li>サービスの運営を妨害する行為</li>
              <li>その他、Caffyが不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">6. コンテンツの削除とアカウント停止</h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">6.1 コンテンツの削除</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Caffyは、以下の場合にコンテンツを削除する権利を留保します：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>本規約に違反するコンテンツ</li>
              <li>他のユーザーから報告された不適切なコンテンツ</li>
              <li>著作権侵害の申し立てがあったコンテンツ</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">6.2 アカウントの停止・削除</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              以下の場合、アカウントを停止または削除することがあります：
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>本規約に違反した場合</li>
              <li>繰り返し規約違反を行った場合</li>
              <li>不正な利用が確認された場合</li>
              <li>長期間（1年以上）利用がない場合（事前通知あり）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">7. 知的財産権</h2>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">7.1 Caffyの知的財産権</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              本サービス、アプリケーション、ロゴ、デザイン、ソフトウェア、アルゴリズムなどの知的財産権は、Caffyまたは正当な権利者に帰属します。無断使用、複製、改変、配布は禁止されています。
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white mt-6">7.2 ユーザーコンテンツの著作権</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ユーザーが投稿したコンテンツの著作権は、ユーザーに帰属します。ただし、第3条に定めるライセンスをCaffyに付与するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">8. 免責事項</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-4">
              <li>本サービスは「現状有姿」で提供され、完全性、正確性、有用性、信頼性について保証しません</li>
              <li>カフェ情報（位置、営業時間、メニュー等）の正確性について保証しません</li>
              <li>ユーザー間のトラブル、紛争について責任を負いません</li>
              <li>第三者サービス（Google Maps、Stripe等）の障害や変更について責任を負いません</li>
              <li>データの損失、破損、または誤動作について責任を負いません</li>
              <li>サービスの中断、終了、変更によって生じた損害について責任を負いません</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">9. 責任の制限</h2>
            <p className="text-gray-300 leading-relaxed">
              Caffyの責任は、法律で許容される最大限の範囲で制限されます。いかなる場合でも、Caffyは間接的、偶発的、特別、結果的、または懲罰的損害について責任を負いません。Caffyの総責任は、ユーザーが過去12ヶ月間に支払った金額を上限とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">10. サービスの変更・終了</h2>
            <p className="text-gray-300 leading-relaxed">
              Caffyは、事前通知なくサービスの内容を変更、一時停止、または終了する権利を留保します。サービス終了の場合、可能な限り事前に通知しますが、緊急の場合は即座に終了することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">11. プライバシー</h2>
            <p className="text-gray-300 leading-relaxed">
              個人情報の収集、使用、共有については、別途定める<Link href="/privacy" className="text-[#C4A574] hover:text-white transition font-semibold">プライバシーポリシー</Link>に従います。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">12. 準拠法と管轄</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約は日本法に準拠し、解釈されます。本サービスまたは本規約に関する紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">13. 規約の変更</h2>
            <p className="text-gray-300 leading-relaxed">
              Caffyは、本規約を随時変更することができます。重要な変更がある場合は、アプリ内通知またはメールでお知らせします。変更後もサービスを継続して利用される場合、変更内容に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">14. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約に関するご質問、不適切なコンテンツの報告、その他のお問い合わせは、以下までご連絡ください：
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
