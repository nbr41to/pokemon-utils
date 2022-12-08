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

export const MenuBar: FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav
      className={clsx(
        'fixed bottom-0 left-1/2 -translate-x-1/2',
        'sm:top-0',
        'flex items-center justify-evenly',
        'h-16 w-full max-w-[520px] bg-black text-white'
      )}
    >
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
    </nav>
  );
};
