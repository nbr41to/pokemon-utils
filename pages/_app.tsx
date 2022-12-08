import type { AppProps } from 'next/app';

import 'src/styles/globals.css';

import { RecoilRoot } from 'recoil';

import { Layout } from '@/components/layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-teal-100">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </RecoilRoot>
  );
};

export default App;
