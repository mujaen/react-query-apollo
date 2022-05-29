import {atom} from 'recoil';
import {localStorageEffect} from 'utils/recoil';

export const rootDeviceState = atom<string>({
  key: 'rootDevice',
  default: '',
  effects: [
    localStorageEffect('Root'),
  ]
});