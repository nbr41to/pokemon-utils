import type { Product } from '@/types/product';
import type { FC } from 'react';

import Image from 'next/image';

type Props = {
  product: Product;
};

export const Card: FC<Props> = ({ product }) => {
  return (
    <div className="w-60 space-y-2 rounded border bg-slate-100 p-4">
      <Image
        className="min-h-[200px] rounded object-contain object-center"
        src={product.thumbnail}
        width={200}
        height={200}
        alt={product.title}
        priority
      />
      <h3 className="text-xl">{product.title}</h3>
      <p>{product.description}</p>
      <p className="text-right font-bold">$ {product.price}</p>
    </div>
  );
};
