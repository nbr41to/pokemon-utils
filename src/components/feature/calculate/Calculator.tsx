import type { FC } from 'react';
import type { CalcDamageOptions } from 'src/types';

import { NumberInput, Chip, SegmentedControl } from '@mantine/core';
import { useForm } from '@mantine/form';

import { getDamageRange } from '@/utils/calculate';

import { CalcStatusForm } from './CalcStatusForm';

export const Calculator: FC = () => {
  const form = useForm<CalcDamageOptions>({
    initialValues: {
      power: 10,
      baseAttack: 0,
      effortAttack: 252,
      baseDefense: 0,
      effortDefense: 252,
      pcmAttack: 1,
      pcmDefense: 1,
      magnifications: [1],
    },
  });

  return (
    <div className="px-3">
      <h2 className="text-center">※ β版 ※ 制作中 ※</h2>
      <p>※レベル50,個体値31で固定</p>

      <h3 className="font-bold">ダメージ計算</h3>

      <div>ダメージ：{getDamageRange(form.values).join('〜')}</div>

      <div className="space-y-2 py-2">
        <div className="flex flex-wrap gap-4">
          <NumberInput
            className="w-40"
            label="技威力"
            {...form.getInputProps('power')}
          />
          <NumberInput
            className="w-40"
            label="攻撃種族値"
            {...form.getInputProps('baseAttack')}
          />
          <div>
            <div className="mb-1 text-sm">攻撃努力値</div>
            <SegmentedControl
              className="w-40"
              defaultValue="252"
              data={['252', '4', '0']}
              {...form.getInputProps('effortAttack')}
            />
          </div>
          <div>
            <div className="mb-1 text-sm">攻撃性格補正</div>
            <SegmentedControl
              className="w-40"
              defaultValue="1.0"
              data={['0.9', '1.0', '1.1']}
              {...form.getInputProps('pcmAttack')}
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap gap-4">
          <div className="flex w-40 items-center justify-center">受ける側</div>
          <NumberInput
            className="w-40"
            label="防御種族値"
            {...form.getInputProps('baseDefense')}
          />
          <div>
            <div className="mb-1 text-sm">防御努力値</div>
            <SegmentedControl
              className="w-40"
              defaultValue="252"
              data={['252', '4', '0']}
              {...form.getInputProps('effortDefense')}
            />
          </div>
          <div>
            <div className="mb-1 text-sm">防御性格補正</div>
            <SegmentedControl
              className="w-40"
              defaultValue="1.0"
              data={['0.9', '1.0', '1.1']}
              {...form.getInputProps('pcmDefense')}
            />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="mb-1 text-sm">タイプ相性</div>
        <SegmentedControl
          className="w-full"
          defaultValue="1.0"
          data={['0.25', '0,5', '1.0', '2.0', '4.0']}
        />
        <div className="flex gap-3">
          <Chip {...form.getInputProps('aaaaaaa', { type: 'checkbox' })}>
            こだわりハチマキ・メガネ
          </Chip>
          <Chip>いのちのたま</Chip>
        </div>
      </div>

      <CalcStatusForm />
    </div>
  );
};
