# Caffy Landing Page

Caffy モバイルアプリの公式ランディングページ

## 🎨 デザイン

- **カラー**: Caffy アプリのブランドカラー（ピンク〜オレンジのグラデーション）
- **テーマ**: カフェ体験をイメージしたパステルカラー
- **UI**: モバイルアプリのデザインシステムに準拠

## 📄 ページ構成

- `/` - トップページ
- `/privacy` - プライバシーポリシー
- `/terms` - 利用規約
- `/legal/specified-commercial-transaction` - 特定商取引法に基づく表記（今後追加）

## 🚀 デプロイ

### Vercel にデプロイ

1. **Vercel CLI をインストール**:
   ```bash
   npm install -g vercel
   ```

2. **プロジェクトをデプロイ**:
   ```bash
   cd caffy-landing
   vercel
   ```

3. **本番環境にデプロイ**:
   ```bash
   vercel --prod
   ```

### 手動デプロイ

1. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
2. "Add New Project" をクリック
3. GitHub リポジトリをインポート（または ZIP をアップロード）
4. フレームワーク: Next.js (自動検出)
5. Deploy をクリック

## 🔧 開発

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ビルド
npm run build

# 本番モードで起動
npm start
```

## 📝 更新履歴

- 2025-01-10: 初版作成

## 📧 お問い合わせ

support@caffy.app

## ⚖️ ライセンス

© 2025 Caffy. All rights reserved.
