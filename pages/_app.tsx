import type { AppProps } from 'next/app';
import 'src/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <h1 className="bg-black py-1 text-center text-lg text-white">
        type checker
      </h1>
      <Component {...pageProps} />
      <footer className="text- bg-black py-1 text-center text-white">
        © 2022 type checker by nob
      </footer>
    </>
  );
};

export default App;
