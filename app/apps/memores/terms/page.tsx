import Link from "next/link";
import { LegalPageTemplate, LegalPageInfo } from "@/app/components";

export const metadata = {
  title: "Memores - 利用規約",
  description: "Memoresアプリの利用規約",
};

const termsInfo: LegalPageInfo = {
  appName: "Memores",
  basePath: "/apps/memores",
  pageTitle: "利用規約",
  lastUpdated: "2025年1月1日",
  sections: [
    {
      title: "1. 規約への同意",
      content: (
        <p>
          Memores（以下「本アプリ」）は、大切な思い出を写真で記録・整理するためのアプリケーションです。
          本アプリを利用することで、本利用規約および
          <Link
            href="/apps/memores/privacy"
            className="text-white hover:underline transition"
          >
            プライバシーポリシー
          </Link>
          に同意したものとみなされます。
        </p>
      ),
    },
    {
      title: "2. サービスの概要",
      content: (
        <>
          <p className="mb-4">本アプリは以下の機能を提供します：</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>デバイスのフォトライブラリにある写真の閲覧・整理</li>
            <li>写真へのタグ、カテゴリ、メモの追加</li>
            <li>アルバム機能による写真のグループ化</li>
            <li>マップ上での写真表示</li>
            <li>カレンダービューでの振り返り</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. 利用条件",
      content: (
        <>
          <h3 className="text-xl font-semibold mb-3 text-white mt-4">
            3.1 必要な権限
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
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
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>本アプリのリバースエンジニアリング、改変、再配布</li>
            <li>本アプリを使用した違法行為</li>
            <li>本アプリの運営を妨害する行為</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. 知的財産権",
      content: (
        <p>
          本アプリ、ロゴ、デザイン、ソフトウェアなどの知的財産権は、開発者に帰属します。
          ユーザーの写真やデータの所有権はユーザーに帰属し、
          本アプリはそれらへのアクセス権を得るのみで、所有権を主張しません。
        </p>
      ),
    },
    {
      title: "5. 免責事項",
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            本アプリは「現状有姿」で提供され、完全性、正確性、有用性について保証しません
          </li>
          <li>データの損失、破損、または誤動作について責任を負いません</li>
          <li>
            本アプリの使用によって生じた直接的・間接的な損害について責任を負いません
          </li>
          <li>定期的なバックアップをお勧めします</li>
        </ul>
      ),
    },
    {
      title: "6. サービスの変更・終了",
      content: (
        <p>
          開発者は、事前通知なくアプリの機能を変更、一時停止、または終了する権利を留保します。
          ただし、ユーザーのデータはデバイス内に保存されているため、
          アプリの終了後もiCloudバックアップなどから復元可能な場合があります。
        </p>
      ),
    },
    {
      title: "7. プライバシー",
      content: (
        <p>
          個人情報の取り扱いについては、別途定める
          <Link
            href="/apps/memores/privacy"
            className="text-white hover:underline transition font-semibold"
          >
            プライバシーポリシー
          </Link>
          をご確認ください。
        </p>
      ),
    },
    {
      title: "8. 準拠法と管轄",
      content: (
        <p>
          本規約は日本法に準拠し、解釈されます。本アプリまたは本規約に関する紛争が生じた場合、
          東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      ),
    },
    {
      title: "9. 規約の変更",
      content: (
        <p>
          本規約は必要に応じて変更されることがあります。
          重要な変更がある場合は、アプリのアップデート時にお知らせします。
          変更後もアプリを継続して利用される場合、変更内容に同意したものとみなされます。
        </p>
      ),
    },
    {
      title: "10. お問い合わせ",
      content: (
        <>
          <p>本規約に関するご質問やお問い合わせは、以下までご連絡ください：</p>
          <p className="mt-4">
            <a
              href="mailto:caffy.help@gmail.com"
              className="text-white font-semibold hover:underline transition"
            >
              caffy.help@gmail.com
            </a>
          </p>
        </>
      ),
    },
  ],
};

export default function MemoresTerms() {
  return <LegalPageTemplate info={termsInfo} />;
}
