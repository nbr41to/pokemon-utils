import type { AppProps } from 'next/app';

import 'src/styles/globals.css';

import { RecoilRoot } from 'recoil';

import { Layout } from '@/components/layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
