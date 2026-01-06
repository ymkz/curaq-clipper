# CuraQ Clipper

[CuraQ](https://curaq.pages.dev/)で現在のページを簡単に共有するためのブラウザ拡張機能です。

## 機能

- ブラウザのツールバーから現在のタブの URL を取得
- URL を URL エンコードして `https://curaq.pages.dev/share?url=[URL]` で新しいタブを開く
- シンプルで使いやすいポップアップ UI

## インストール方法

### ビルド版を使用する場合

1. [Releases](../../releases)から最新の `.zip` ファイルをダウンロード
2. Chrome で `chrome://extensions/` に移動
3. 「デベロッパーモード」を有効にする
4. ダウンロードした `.zip` ファイルを画面にドラッグ&ドロップする

### ソースからビルドする場合

```bash
# 依存関係のインストール
pnpm install

# ビルド
pnpm build

# 生成された dist/chrome-mv3 フォルダをブラウザに読み込む
```

## 開発

```bash
# 開発モードで起動（ファイルの変更を監視）
pnpm dev

# 型チェック
pnpm typecheck

# リント
pnpm lint

# フォーマット
pnpm format
```

## プロジェクト構成

```
curaq-clipper/
├── src/
│   └── entrypoints/
│       └── popup/
│           ├── index.html    # ポップアップの HTML
│           └── main.ts       # ポップアップのロジック
├── public/
│   └── icon/                 # 拡張機能のアイコン
├── wxt.config.ts             # WXT の設定
└── package.json
```

## 使用技術

- [WXT](https://wxt.dev/) - ブラウザ拡張機能フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- [Biome](https://biomejs.dev/) - リントとフォーマット
