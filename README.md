# Welcome My Template with Next.js

## Templates

- [Main](https://github.com/nbr41to/my-template-nextjs)
- [with Mantine](https://github.com/nbr41to/my-template-nextjs/tree/with-mantine)
- [Simple](https://github.com/nbr41to/my-template-nextjs/tree/simple)

## Getting Started

```sh
yarn create next-app -e "https://github.com/nbr41to/my-template-nextjs"
```

## Features

- Next.js
- TypeScript
- ESLint
- Prettier
- Tailwind CSS
- Storybook
- SWR
- React Hook Form
- Zod
- Jest
- Axios

## Director Structure

- `page/` - Next.js のページ
- `src/`
  - `apis/` - API を叩く関数を配置
  - `assets/` - 静的なファイル
  - `components/` - 共通化された Component を並列で配置
  - `features/` - 各 Model の Component を並列で配置
  - `hooks/` - custom hooks を配置(API でデータを取得するの Hook もここ)
  - `libs/` - ライブラリと密結合になるものを定義
  - `styles/` - CSS やフォントの ttf を配置
  - `types/` - App 内の Modal の型を定義
  - `utils/` - test を書く必要のある便利な関数を配置

## Config

- 絶対パスでの import に対応
- src 直下の Directory は alias で import 可能
