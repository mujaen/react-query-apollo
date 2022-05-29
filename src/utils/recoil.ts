import { encode, decode } from 'js-base64';


// export const localStorageEffect = key => ({setSelf, onSet}) => {
//   const savedValue = localStorage.getItem(decode(key))
//   if (savedValue != null) {
//     setSelf(JSON.parse(decode(savedValue)));
//   }
//
//   onSet((newValue, _, isReset) => {
//     isReset
//         ? localStorage.removeItem(decode(key))
//         : localStorage.setItem(encode(key), JSON.stringify(encode(newValue)));
//   });
// };

export const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue != null) {
    JSON.parse(savedValue);
    setSelf(decode(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(encode(newValue)));
  });
};