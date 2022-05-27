import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const { persistAtom:root } = recoilPersist({key: 'Root'})

export const rootDeviceState = atom<string>({
  key: 'rootDevice',
  default: '',
  effects_UNSTABLE: [root]
});