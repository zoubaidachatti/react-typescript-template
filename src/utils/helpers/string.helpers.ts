import { generateRandomNumber } from '@/utils/helpers/number.helpers';

export function generateRandomString(stringLength?: number): string {
  const length = stringLength ?? 10;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let string = '';
  Array.from({ length }).map((_) => (string += chars[generateRandomNumber(0, chars.length - 1)]));

  return string;
}
