import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="">
      <h1 className="py-2 text-center text-lg font-bold">pokemon-utils</h1>
      <hr />
      <div className="py-4 px-6">
        <h2 className="py-2 text-center font-bold">使い方</h2>
        <p>
          PCは上部、スマホは下部にあるメニューからそれぞれの機能をお使いいただけます。
        </p>
        <p>
          各ページにある右上の Information
          ボタンを押すと各機能の説明が表示されます。
        </p>
        <h2 className="py-2 text-center font-bold">規約</h2>
        <p>特にありません。</p>
        <p>作者の都合で突然アップデートしたり削除したりすることがあります。</p>
      </div>
    </div>
  );
};

export default Home;
