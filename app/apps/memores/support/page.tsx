import { SupportPageTemplate, SupportPageInfo } from "@/app/components";

export const metadata = {
  title: "Memores - サポート",
  description: "Memoresアプリのサポートページ",
};

const supportInfo: SupportPageInfo = {
  appName: "Memores",
  appDescription: "思い出写真記録アプリ",
  basePath: "/apps/memores",
  faqs: [
    {
      question: "写真はどこに保存されますか？",
      answer:
        "すべての写真とデータはお使いのデバイス内にローカル保存されます。クラウドへのアップロードは行われないため、プライバシーが保護されます。",
    },
    {
      question: "写真を削除するとどうなりますか？",
      answer:
        "アプリ内で写真の記録を削除しても、元の写真はデバイスのフォトライブラリに残ります。Memoresはあくまで写真のメタデータ（タグ、場所など）を管理するアプリです。",
    },
    {
      question: "位置情報は必須ですか？",
      answer:
        "位置情報の使用は任意です。許可しなくても基本機能は使用できます。位置情報を許可すると、マップ上で思い出を振り返ることができます。",
    },
    {
      question: "データのバックアップはできますか？",
      answer:
        "iCloudバックアップを有効にしている場合、アプリのデータは自動的にバックアップされます。デバイスを変更しても、バックアップから復元することでデータを引き継げます。",
    },
  ],
};

export default function MemoresSupport() {
  return <SupportPageTemplate info={supportInfo} />;
}
