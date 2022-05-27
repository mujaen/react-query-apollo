import {atom, selector, DefaultValue} from 'recoil';
import {recoilPersist} from 'recoil-persist';
import axios, {AxiosResponse} from 'axios';
import {localStorageBase64} from 'utils/recoil';

interface UserInfo {
  [key: string]: string
}

const { persistAtom } = recoilPersist({key: 'User', storage: localStorageBase64()})

export const userRepoInfoState = atom<UserInfo>({
  key: 'userRepoInfo',
  default: {
    user: '',
    repo: ''
  },
  effects_UNSTABLE: [persistAtom],
});

export const userProfileState = atom<string>({
  key: 'userProfile',
  default: '',
});

export const getUserRepoInfo = selector({
  key: 'getUserRepoInfo',
  get: async ({ get }) => {
    const {user, repo} = get(userRepoInfoState);
    if (!user || !repo) return;
    try {
      const data = await axios.get(`https://api.github.com/repos/${user}/${repo}`)
        .then((response: AxiosResponse) => response.data);
      return data?.stargazers_count;
    } catch (err) {
      console.log(err);
    }
  },
  set: ({set}, newValue: DefaultValue) => set(userRepoInfoState, newValue),
});