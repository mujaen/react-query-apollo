import { encode, decode } from 'js-base64';

export const localStorageBase64 = () => {
  return {
    setItem: (key, value) => {
      localStorage.setItem(encode(key), encode(value))
    },
    getItem: (key) => {
      const a =  localStorage.getItem(encode(key))
      return decode(a || '')
    },
    clear: () => {
      localStorage.clear()
    }
  }
}