"use client";

import { AppLandingTemplate, AppInfo } from "@/app/components";

const memoresApp: AppInfo = {
  name: "Memores",
  tagline: "大切な思い出を写真で記録・整理するライフログアプリ",
  logo: "/memores_logo.png",
  heroImage: "/memores/Device-2.png",
  basePath: "/apps/memores",
  status: "coming_soon",
  badges: ["完全無料", "オフライン対応", "プライバシー重視"],
  features: [
    {
      title: "写真をタグで整理",
      description:
        "写真をタグ付けで簡単に整理。「#クリスマス」「#旅行」など、自分だけのカテゴリで管理できます。",
      image: "/memores/Device-2.png",
    },
    {
      title: "マップで振り返り",
      description:
        "訪れた場所をマップ上で確認。どこで何をしたか、思い出を地図と共に振り返れます。",
      image: "/memores/Device-3.png",
    },
    {
      title: "お好みのテーマで",
      description:
        "ダークモード・ライトモード対応。20種類以上のカラーテーマで、あなた好みにカスタマイズ。",
      image: "/memores/Device-4.png",
    },
    {
      title: "プライバシーを守る",
      description:
        "パスコードでアプリをロック。大切な思い出を安全に保護します。",
      image: "/memores/Device-1.png",
    },
  ],
};

export default function MemoresPage() {
  return <AppLandingTemplate app={memoresApp} />;
}
