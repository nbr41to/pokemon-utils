/**
 * 引数がなければ, 現在時刻を 'YYYY/MM/DD hh:mm:ss' のフォーマットで返す
 * @param date type: Date | string | undefined
 * @param format type: string('YYYY/MM/DD hh:mm:ss') | undefined
 * @returns type: string
 */
export const dateFormatted = (
  date?: Date | string,
  format?: string
): string => {
  const d = (() => {
    if (typeof date === 'undefined') return new Date();
    if (typeof date === 'string') return new Date(date);

    return date;
  })();
  const f = format || 'YYYY/MM/DD hh:mm';

  let fmt = f;
  fmt = fmt.replace(/YYYY/, d.getFullYear().toString());
  fmt = fmt.replace(/MM/, `0${d.getMonth() + 1}`.slice(-2));
  fmt = fmt.replace(/DD/, `0${d.getDate()}`.slice(-2));
  fmt = fmt.replace(/hh/, `0${d.getHours()}`.slice(-2));
  fmt = fmt.replace(/mm/, `0${d.getMinutes()}`.slice(-2));
  fmt = fmt.replace(/ss/, `0${d.getMinutes()}`.slice(-2));

  return fmt;
};
