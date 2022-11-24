import type { z } from './client';
import type { ZodError, ZodFormattedError } from 'zod';

/**
 * ZodのValidationとErrorMessagesの整形と追加をする
 * @generic T 検証するパラメータの型
 * @param scheme ZodのValidationScheme
 * @param params 検証するパラメータ
 * @param setErrors エラーをセットする関数
 * @returns 正常の場合は検証済みのパラメータ、Errorの場合はundefined
 * */
export const validateParams = <T>(
  scheme: z.ZodSchema<T>,
  params: any,
  setErrors: (errors: ZodFormattedError<T>) => void
) => {
  try {
    return scheme.parse(params);
  } catch (error) {
    const formattedError = (error as ZodError<T>).format();
    setErrors(formattedError);

    return undefined;
  }
};
