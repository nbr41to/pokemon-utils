import type { FC, ReactNode } from 'react';

import { MenuBar } from './MenuBar';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="relative mx-auto min-h-screen max-w-[520px] bg-white pb-16 sm:pt-16">
      <main className="">{children}</main>
      <MenuBar />
    </div>
  );
};
