import type { FC } from 'react';
import type { Elemental } from 'src/types';

import { useRecoilState } from 'recoil';

import { elementals } from 'src/data/compatibilities';
import { compatibilityCheckAtom } from 'src/store/atom';

import { TypeMultiSelect } from '../../TypeMultiSelect';
import { CompatibilityTable } from './CompatibilityTable';

export const CompatibilityChecker: FC = () => {
  const [selects, setSelects] = useRecoilState(compatibilityCheckAtom);

  const onSelect = (el: Elemental) => {
    if (selects.includes(el)) {
      setSelects(selects.filter((d) => d !== el));
    } else {
      setSelects([...selects, el]);
    }
  };

  return (
    <div>
      <TypeMultiSelect
        value={selects}
        onSelect={onSelect}
        onSelectAll={() => setSelects([...elementals])}
        onClear={() => setSelects([])}
      />
      <div className="mx-auto mt-4 min-h-[372px] w-fit">
        <CompatibilityTable selects={selects} />
      </div>
    </div>
  );
};
