import type { NextPage } from 'next';

import { useState } from 'react';
import { TbCalculator } from 'react-icons/tb';

import { Calculator } from '@/components/feature/calculate/Calculator';
import { InfoButton } from '@/components/InfoButton';
import { Modal } from '@/components/Modal';

const Calculate: NextPage = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbCalculator size={24} />
        <h2 className="text-lg font-bold">ダメージ・ステータス計算</h2>
        <TbCalculator size={24} />
        <div className="absolute right-2">
          <InfoButton onClick={() => setOpenInfo(!openInfo)} />
        </div>
      </div>
      <Calculator />
      {openInfo && (
        <Modal close={() => setOpenInfo(false)}>
          <h4 className="py-3 text-center font-bold">
            ダメージとステータスの計算
          </h4>
          <p>計算できるよ</p>
        </Modal>
      )}
    </div>
  );
};

export default Calculate;
