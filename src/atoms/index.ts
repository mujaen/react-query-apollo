import { atom } from 'recoil';

export const startDateState = atom<string>({
  key: 'startDate',
  default: '',
});

export const endDateState = atom<string>({
  key: 'endDate',
  default: '',
});
