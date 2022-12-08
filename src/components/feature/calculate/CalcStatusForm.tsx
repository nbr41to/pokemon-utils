import type { FC } from 'react';
import type { CalcStatusOptions } from 'src/types';

import { Checkbox, NumberInput, SegmentedControl } from '@mantine/core';
import { useForm } from '@mantine/form';

import { getStatus } from '@/utils/calculate';

export const CalcStatusForm: FC = () => {
  const form = useForm<CalcStatusOptions>({
    initialValues: {
      base: 0,
      effort: 252,
      pcm: 1.0,
      isHitPoint: true,
    },
  });

  return (
    <div>
      <h3 className="font-bold">ステータス計算</h3>
      <div>{getStatus(form.values)}</div>
      <div className="space-y-2">
        <Checkbox
          label="HPの場合はチェック"
          defaultChecked
          {...form.getInputProps('isHitPoint')}
        />
        <NumberInput
          className="w-40"
          label="種族値"
          {...form.getInputProps('base')}
        />
        <div>
          <div className="mb-1 text-sm">努力値</div>
          <SegmentedControl
            className="w-40"
            defaultValue="252"
            data={['252', '4', '0']}
            {...form.getInputProps('effort')}
          />
        </div>
        <div>
          <div className="mb-1 text-sm">性格補正</div>
          <SegmentedControl
            className="w-40"
            defaultValue={1.1}
            data={['0.9', '1.0', '1.1']}
            {...form.getInputProps('pcm')}
          />
        </div>
      </div>
    </div>
  );
};
