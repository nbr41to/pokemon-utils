import type { FC, ReactNode } from 'react';

import { Footer } from './Footer';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
};
