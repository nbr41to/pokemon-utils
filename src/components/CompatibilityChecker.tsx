import type { FC } from 'react';
import type { Elemental } from 'src/utils';

import { useState } from 'react';

import { elementals } from 'src/utils';

import { CompatibilityTable } from './CompatibilityTable';
import { TypeMultiSelect } from './TypeMultiSelect';

export const CompatibilityChecker: FC = () => {
  const [selects, setSelects] = useState<Elemental[]>([...elementals]);

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
