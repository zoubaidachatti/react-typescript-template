import { isString } from 'lodash';

export const persistData = (key: string, data: unknown) => {
  const dataString: string = isString(data) ? (data as string) : JSON.stringify(data);
  localStorage.setItem(key, dataString);
};

export const getPersistData = (key: string) => {
  return localStorage.getItem(key) ?? '';
};

export const removePersistData = (key: string) => {
  localStorage.removeItem(key);
};
