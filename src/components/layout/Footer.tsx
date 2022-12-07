import type { FC } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import {
  TbSword,
  TbShieldCheckered,
  TbTable,
  TbSearch,
  TbCalculator,
} from 'react-icons/tb';

export const Footer: FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <footer className="fixed bottom-0 flex h-16 w-full items-center justify-evenly bg-black text-white">
      <button
        type="button"
        className={clsx('h-full px-5', pathname === '/attack' && 'bg-gray-600')}
        onClick={() => router.push('/attack')}
      >
        <TbSword size={32} />
      </button>
      <button
        type="button"
        className={clsx(
          'h-full px-5',
          pathname === '/defense' && 'bg-gray-600'
        )}
        onClick={() => router.push('/defense')}
      >
        <TbShieldCheckered size={32} />
      </button>
      <button
        type="button"
        className={clsx(
          'h-full px-5',
          pathname === '/compatibility' && 'bg-gray-600'
        )}
        onClick={() => router.push('/compatibility')}
      >
        <TbTable size={32} />
      </button>
      <button
        type="button"
        className={clsx('h-full px-5', pathname === '/search' && 'bg-gray-600')}
        onClick={() => router.push('/search')}
      >
        <TbSearch size={32} />
      </button>
      <button
        type="button"
        className={clsx(
          'h-full px-5',
          pathname === '/calculate' && 'bg-gray-600'
        )}
        onClick={() => router.push('/calculate')}
      >
        <TbCalculator size={24} />
      </button>
    </footer>
  );
};
