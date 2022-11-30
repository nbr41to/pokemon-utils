import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import 'src/styles/globals.css';
import { SlMenu } from 'react-icons/sl';
import { TbSword, TbShieldCheckered, TbTable, TbSearch } from 'react-icons/tb';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <div className="relative">
      <main className="pb-16">
        <Component {...pageProps} />
      </main>
      <footer className="fixed bottom-0 flex h-16 w-full items-center justify-evenly bg-black text-white">
        <button
          type="button"
          className="h-full px-4"
          onClick={() => router.push('/attack')}
        >
          <TbSword size={32} />
        </button>
        <button
          type="button"
          className="h-full px-4"
          onClick={() => router.push('/defense')}
        >
          <TbShieldCheckered size={32} />
        </button>
        <button
          type="button"
          className="h-full px-4"
          onClick={() => router.push('/compatibility')}
        >
          <TbTable size={32} />
        </button>
        <button
          type="button"
          className="h-full px-4"
          onClick={() => router.push('/search')}
        >
          <TbSearch size={32} />
        </button>
        <button
          type="button"
          className="h-full px-4"
          onClick={() => router.push('/')}
        >
          <SlMenu size={24} />
        </button>
      </footer>
    </div>
  );
};

export default App;
