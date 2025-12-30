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
      title: "カフェ体験を記録",
      description:
        "訪れたカフェの写真、感想、評価を簡単に記録。メニューや価格も一緒に保存して、あなただけのカフェログを作りましょう。",
      image: "/mockdevice/device3.png",
    },
    {
      title: "マップで発見",
      description:
        "近くのカフェをマップで探索。友達が訪れたカフェや人気のスポットを地図上で確認できます。",
      image: "/mockdevice/device9.png",
    },
    {
      title: "友達とシェア",
      description:
        "お気に入りのカフェを友達と共有。いいねやコメントでカフェ好き同士つながりましょう。",
      image: "/mockdevice/device4.png",
    },
    {
      title: "カレンダーで振り返り",
      description:
        "いつ、どのカフェを訪れたかカレンダーで一覧。思い出を日付と共に振り返れます。",
      image: "/mockdevice/device7.png",
    },
  ],
};

export default function CaffyPage() {
  return <AppLandingTemplate app={caffyApp} />;
}
