import {atom, selector, DefaultValue} from 'recoil';
import axios, {AxiosResponse} from 'axios';
import {localStorageBase64} from 'utils/recoil';
import {recoilPersist} from "recoil-persist";

interface UserInfo {
  [key: string]: string
}

export const { persistAtom } = recoilPersist({ key: 'userInfo', storage: localStorageBase64() })

export const userRepoInfoState = atom<UserInfo>({
  key: 'userRepoInfo',
  default: {
    user: '',
    repo: ''
  },
  effects: [persistAtom],
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