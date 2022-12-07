import type { FC } from 'react';

import { TbInfoCircle } from 'react-icons/tb';

type Props = {
  onClick: () => void;
};

export const InfoButton: FC<Props> = ({ onClick }) => {
  return <TbInfoCircle onClick={onClick} size={24} />;
};
