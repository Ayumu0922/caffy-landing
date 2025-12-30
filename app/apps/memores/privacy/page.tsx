import { LegalPageTemplate, LegalPageInfo } from "@/app/components";

export const metadata = {
  title: "Memores - プライバシーポリシー",
  description: "Memoresアプリのプライバシーポリシー",
};

const privacyInfo: LegalPageInfo = {
  appName: "Memores",
  basePath: "/apps/memores",
  pageTitle: "プライバシーポリシー",
  lastUpdated: "2025年1月1日",
  sections: [
    {
      title: "概要",
      content: (
        <p>
          Memores（以下「本アプリ」）は、ユーザーのプライバシーを最優先に設計されています。
          本アプリはすべてのデータをお使いのデバイス内にローカル保存し、
          外部サーバーへのデータ送信は一切行いません。
        </p>
      ),
    },
    {
      title: "1. 収集する情報",
      content: (
        <>
          <p className="mb-4">
            本アプリは以下の情報をデバイス内にのみ保存します：
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white mt-6">
            1.1 写真へのアクセス
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>デバイスのフォトライブラリへの読み取りアクセス</li>
            <li>写真のメタデータ（撮影日時、位置情報など）</li>
            <li>
              写真自体はフォトライブラリに保存されたまま、コピーは作成されません
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-white mt-6">
            1.2 位置情報（任意）
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>写真の撮影場所情報（写真のメタデータから取得）</li>
            <li>手動で追加した場所情報</li>
            <li>
              位置情報の使用は任意であり、許可しなくても基本機能は使用できます
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-white mt-6">
            1.3 ユーザー入力情報
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>タグ、カテゴリ、メモなどの分類情報</li>
            <li>アルバム情報</li>
            <li>アプリ設定（テーマ、表示設定など）</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. データの保存場所",
      content: (
        <>
          <p className="mb-4">
            すべてのデータはお使いのデバイス内のローカルデータベース（SQLite）に保存されます。
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
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
        </>
      ),
    },
    {
      title: "3. 第三者サービス",
      content: (
        <>
          <h3 className="text-xl font-semibold mb-3 text-white mt-4">
            3.1 Google Places API（任意）
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              場所検索機能を使用する場合のみ、Googleに検索クエリが送信されます
            </li>
            <li>場所検索を使用しない場合、外部サービスへの通信は発生しません</li>
            <li>
              プライバシーポリシー：
              <a
                href="https://policies.google.com/privacy"
                className="text-white hover:underline transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </li>
          </ul>

          <p className="mt-6">
            <strong>重要：</strong>
            本アプリは第三者のアナリティクスツール（Google
            Analytics、Facebookピクセルなど）や
            広告SDKを一切使用していません。
          </p>
        </>
      ),
    },
    {
      title: "4. データの削除",
      content: (
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            アプリ内で記録を削除すると、関連するメタデータはデバイスから完全に削除されます
          </li>
          <li>
            元の写真はデバイスのフォトライブラリに残り、影響を受けません
          </li>
          <li>アプリをアンインストールすると、すべてのアプリデータが削除されます</li>
        </ul>
      ),
    },
    {
      title: "5. 子供のプライバシー",
      content: (
        <p>
          本アプリは全年齢向けに設計されています。個人情報を収集しないため、
          13歳未満のお子様でも安全にご利用いただけます。
        </p>
      ),
    },
    {
      title: "6. ポリシーの変更",
      content: (
        <p>
          本プライバシーポリシーは必要に応じて変更されることがあります。
          重要な変更がある場合は、アプリのアップデート時にお知らせします。
        </p>
      ),
    },
    {
      title: "7. お問い合わせ",
      content: (
        <>
          <p>プライバシーに関するご質問やお問い合わせは、以下までご連絡ください：</p>
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

export default function MemoresPrivacy() {
  return <LegalPageTemplate info={privacyInfo} />;
}
