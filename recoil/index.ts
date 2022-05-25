import { atom } from 'recoil';

export const startDateState = atom<string>({
  key: 'startDate',
  default: '',
});
