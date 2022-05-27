import { encode, decode } from 'js-base64';

export const localStorageBase64 = () => {
  return {
    setItem: (key: string, value: string): void => {
      localStorage.setItem(encode(key), encode(value))
    },
    getItem: (key: string) => {
      const value =  localStorage.getItem(encode(key))
      return decode(value || '')
    },
    clear: () => {
      localStorage.clear()
    }
  }
}

export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(encode(key), encode(value));
};

export const getLocalStorage = (key: string) => {
  const value =  localStorage.getItem(encode(key))
  return decode(value || '');
};