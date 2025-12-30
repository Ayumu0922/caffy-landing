import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caffy - カフェ記録アプリ",
  description: "訪れたカフェ、味わったコーヒー、特別な瞬間を記録。カフェ好きのためのライフスタイルアプリ",
  other: {
    "apple-itunes-app": "app-id=6751098933",
  },
};

export default function CaffyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
