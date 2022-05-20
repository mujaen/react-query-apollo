# React-query + recoil+ GraphQL(Apollo)


### Motivation
기존 Redux 환경의 상태관리가 필요한 기능 이상으로 비대하고  
상태관리의 역할만을 위한 라이브러리가 맞는가 의구심이 들어 변화가 필요하다고 생각.  
recoil로 구성하고 React-query를 사용하여   
서버로 오는 데이터의 상태관리와 캐싱, 동기화를 담당시킬 예정입니다

### Dependencies

| Skill       | Version |
|:------------|:--------|
| React       | 18.0.0  |
| React-query | 3.39.0  |
| Typescript  | 4.6.4   |
| Yarn Berry  | 3.2.0   |
| Webpack     | 5.7.21  |
| Express     | 4.18.1  |
| graphql     | 16.5.0  |

## Set up

1. Node는 현재 기준 LTS인 16.15.0를 사용합니다

```
nvm use 16.15.0
(npm v8.5.5)
```

2. Package Manager는 yarn(berry)를 기본으로 사용합니다

```
yarn set version berry
yarn install
```

## Getting Started

```
yarn run start
```

## Referance

- [React Query와 상태관리::우아한테크세미나](https://www.youtube.com/watch?v=MArE6Hy371c)
