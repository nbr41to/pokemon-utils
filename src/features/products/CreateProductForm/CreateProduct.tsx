import type { FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { productCreateSchema } from '@/libs/validation/schemas/product';

export const CreateProductForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productCreateSchema),
  });

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    reset();
  });

  return (
    <form
      className="mx-auto w-80 space-y-2 rounded border bg-slate-100 p-4 text-right"
      onSubmit={onSubmit}
    >
      <div>
        <span>title: </span>
        <input id="title" className="rounded border" {...register('title')} />
        {!!errors.title?.message && (
          <p className="text-xs text-red-500">
            {errors.title?.message as string}
          </p>
        )}
      </div>
      <div>
        <span>description: </span>
        <input className="rounded border" {...register('description')} />
        {!!errors.description?.message && (
          <p className="text-xs text-red-500">
            {errors.description?.message as string}
          </p>
        )}
      </div>
      <div>
        <span>price: </span>
        <input className="rounded border" {...register('price')} />
        {!!errors.price?.message && (
          <p className="text-xs text-red-500">
            {errors.price?.message as string}
          </p>
        )}
      </div>
      <div>
        <span>thumbnail: </span>
        <input className="rounded border" {...register('thumbnail')} />
      </div>
      <button className="w-full bg-teal-500 text-white" type="submit">
        submit
      </button>
    </form>
  );
};
