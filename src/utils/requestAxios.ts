import axios, {AxiosResponse} from 'axios';
import { stringify } from 'query-string-for-all';

export const request = (method: string, url: string, data? ) => {
  let headers;

  if (true) {
    headers = {"Authorization": "13213"};
  }

  return axios({
    method,
    url,
    data,
    headers
  })
  .then(function (response: AxiosResponse ) {
    return response;
  })
  .catch((error) => {
    if(error.response.status === 401) {
      return window.location.href = "/Resign";
    } else if(error.response.status === 403) {
      alert("권한이 없습니다. 관리자에게 문의해 주세요");
      return;
    } else if(error.response.status === 404) {
      alert("페이지를 찾을 수 없습니다.");
      return;
    } else if(error.response.status === 500) {
      alert("데이터 처리에 오류가 있습니다.");
      return;
    } else {
      alert("데이터 처리에 오류가 있습니다.");
      return;
    }
  })
};


export const requestGet = (url: string, params?) => {
  return request('GET', `${url}?${stringify(params)}`);
};

export const requestPost = (url: string, params?) => {
  return request('POST', url, params);
};

export const requestPut = (url: string, params?) => {
  return request('PUT', url, params);
};

export const requestPatch = (url: string, params?) => {
  return request('PATCH', url, params);
};

export const requestDelete = (url: string, params?) => {
  return request('DELETE', `${url}?${stringify(params)}`);
};