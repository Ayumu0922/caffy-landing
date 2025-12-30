"use client";

import { AppLandingTemplate, AppInfo } from "@/app/components";

const caffyApp: AppInfo = {
  name: "Caffy",
  tagline: "訪れたカフェ、味わったコーヒー、特別な瞬間を記録。カフェ好きのためのライフスタイルアプリ",
  logo: "/caffy_logo.png",
  heroImage: "/mockdevice/device1.png",
  basePath: "/apps/caffy",
  status: "available",
  appStoreUrl: "https://apps.apple.com/jp/app/caffy",
  badges: ["無料で始められる", "マップ機能", "ソーシャル共有"],
  extraNavLinks: [{ label: "特商法", href: "/apps/caffy/legal/tokushoho" }],
  extraFooterLinks: [{ label: "特商法表記", href: "/apps/caffy/legal/tokushoho" }],
  features: [
    {
      title: "あなただけのカフェログ",
      description:
        "訪れたカフェの写真をプロフィールに記録。投稿数やいいねも一目で確認でき、あなたのカフェ巡りの軌跡が形になります。",
      image: "/mockdevice/device3.png",
    },
    {
      title: "カレンダーで振り返る",
      description:
        "いつ、どのカフェを訪れたか日付ごとに一覧表示。過去の思い出を月ごとにたどって、あの日の一杯を振り返りましょう。",
      image: "/mockdevice/device9.png",
    },
    {
      title: "カフェ好きとつながる",
      description:
        "他のユーザーのプロフィールをチェック。お気に入りのカフェや素敵な写真を見つけて、カフェ好き同士でつながりましょう。",
      image: "/mockdevice/device4.png",
    },
    {
      title: "マップで足跡を残す",
      description:
        "訪れたカフェがマップ上にピンで表示。自分だけのカフェマップを作りながら、次に行きたいお店も見つかります。",
      image: "/mockdevice/device7.png",
    },
  ],
};

export default function CaffyPage() {
  return <AppLandingTemplate app={caffyApp} />;
}
