"use client";

import Link from "next/link";
import Image from "next/image";

export default function TokushohoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
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
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-12">
            <Link
              href="/privacy"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              利用規約
            </Link>
            <Link
              href="/legal/tokushoho"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              特商法表記
            </Link>
            <a
              href="mailto:caffy.help@gmail.com"
              className="text-[10px] sm:text-sm lg:text-base text-gray-400 hover:text-[#C4A574] transition"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          特定商取引法に基づく表記
        </h1>
        <p className="text-sm text-gray-500 mb-12">最終更新日: 2025年1月9日</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">販売事業者</h2>
            <p className="text-gray-300">窪田歩夢</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              運営統括責任者
            </h2>
            <p className="text-gray-300">窪田歩夢</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">所在地</h2>
            <p className="text-gray-300">
              請求があれば遅滞なく開示します
              <br />
              （caffy.help@gmail.com までお問い合わせください）
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              お問い合わせ
            </h2>
            <p className="text-gray-300">
              メールアドレス: caffy.help@gmail.com
              <br />
              ※お問い合わせはメールにて承ります
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">販売価格</h2>
            <div className="text-gray-300">
              <p className="font-semibold text-[#C4A574] mb-2">
                プレミアムプラン
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>月額プラン: ¥500（税込）/ 月</li>
                <li>年額プラン: ¥5,000（税込）/ 年</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                ※価格はすべて日本円、税込表示です
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              商品代金以外の必要料金
            </h2>
            <div className="text-gray-300">
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>インターネット接続料金</li>
                <li>通信料金</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                ※通信料金はご利用の携帯電話会社・インターネットプロバイダーとの契約内容により異なります
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">支払方法</h2>
            <div className="text-gray-300">
              <p className="mb-2">Stripe決済システムを通じた以下の方法：</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  クレジットカード（Visa、Mastercard、JCB、American Express、Diners
                  Club、Discover）
                </li>
                <li>Stripe Link</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                ※クレジットカード情報はStripeが安全に管理し、当社は保存しません
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">支払時期</h2>
            <div className="text-gray-300">
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>サブスクリプション登録時に初回決済が実行されます</li>
                <li>その後、選択したプランに応じて自動更新されます：</li>
                <ul className="list-circle list-inside space-y-1 ml-6">
                  <li>月額プラン: 毎月同日に決済</li>
                  <li>年額プラン: 毎年同日に決済</li>
                </ul>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              サービス提供時期
            </h2>
            <p className="text-gray-300">
              決済完了後、即時にプレミアム機能をご利用いただけます
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              返品・キャンセル・返金について
            </h2>
            <div className="text-gray-300">
              <p className="mb-2">
                デジタルコンテンツの特性上、以下のポリシーを適用します：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>サブスクリプションはいつでもキャンセル可能です</li>
                <li>
                  キャンセル後も、現在の請求期間終了までプレミアム機能をご利用いただけます
                </li>
                <li>
                  返金は原則として行いません（法律で義務付けられている場合を除く）
                </li>
                <li>未使用期間に対する日割り計算や部分返金は行いません</li>
                <li>
                  サービスに重大な不具合があった場合、個別に対応いたします
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              キャンセル方法
            </h2>
            <div className="text-gray-300">
              <p className="mb-2">以下の方法でキャンセルできます：</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Stripeカスタマーポータルからキャンセル</li>
                <li>アプリ内の設定画面からキャンセル</li>
                <li>caffy.help@gmail.com へのメール連絡</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">動作環境</h2>
            <div className="text-gray-300">
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>iOS 13.0以降</li>
                <li>Android 8.0以降</li>
                <li>インターネット接続必須</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">注意事項</h2>
            <div className="text-gray-300">
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  サブスクリプションは自動更新されます。更新を希望しない場合は、次回請求日の前にキャンセルしてください
                </li>
                <li>料金変更の場合、少なくとも30日前に通知します</li>
                <li>
                  サービス内容は予告なく変更される場合があります
                </li>
                <li>
                  本サービスの利用には、別途定める利用規約が適用されます
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">その他</h2>
            <p className="text-gray-300">
              本表記に関するご質問や不明点がございましたら、caffy.help@gmail.com
              までお問い合わせください。
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="text-[#C4A574] hover:text-[#d4b584] transition"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
