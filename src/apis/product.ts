import type { ProductCreateParams, ProductUpdateParams } from '@/types/product';

import { axios } from '@/libs/api/client';

export const createProduct = async (params: ProductCreateParams) => {
  const response = await axios.post('/products', params);

  return response.data;
};

export const updateProduct = async (params: ProductUpdateParams) => {
  const response = await axios.put('/products', params);

  return response.data;
};
