import { dateFormatted } from './dateFormatted';

const dummyStringDate = '2020/01/01 00:00';
const dummyDate = new Date(dummyStringDate);

describe('utils/dateFormatted.ts', () => {
  test('dateFormatted', (): void => {
    expect(dateFormatted(dummyDate)).toEqual(dummyStringDate);
    expect(dateFormatted(dummyDate, 'YYYY-MM-DD')).toEqual('2020-01-01');
  });
});
