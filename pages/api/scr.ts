import type { NextApiRequest, NextApiResponse } from 'next';
import type { Pokemon } from 'src/utils';

import { getPokemons } from 'src/getPokemons';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  const list = await getPokemons();

  res.status(200).json(list);
}
