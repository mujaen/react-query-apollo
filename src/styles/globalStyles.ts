import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    font-size: 14px;
    color: #000;
    letter-spacing: -.01em;
    word-break: normal;
    word-wrap: break-word;
  }
  
  /**
   * 1. 모든 브라우저에서 동일한 간격 적용.
   * 2. iOS에서 기기 회전 시 글씨 크기가 재조정되는 것을 예방.
   */
   
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    font-family: 'UI Frip', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  /*
   * 기본 마진값 제거.
   */
   
  body {
    margin: 0;
  }
  
  /**
   * IE에서 정의되지 않은 'main'을 'block'으로 지정.
   */
   
  main {
    display: block;
  }
  
  /**
   * Firefox 4+, Safari, Chrome에서 'section'과 'article' 내부의 'h1' 요소의 글꼴 크기와 마진값이 서로 다른 것을 통일시킴.
   */
 
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /**
   * 1. Firefox와 다른 브라우저 동일하게 적용.
   * 2. Edge와 IE에서 'overflow' 보이도록 설정.
   */
  
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  
  /**
   * 1. 모든 브라우저에서 폰트명  동일하게 적용.
   * 2. 모든 브라우저에서 폰트 사이즈 동일하게 적용.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * IE 10에서 활성화된 링크의 배경색 제거.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * Chrome 특정버전 보더 삭제 및 하위 버전에서 존재하지 않은 스타일 부여.
   */
  
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  
  /**
   * Chrome, Edge, Safari에서 글자 굵가 동일하게 적용.
   */
  
  strong {
    font-weight: bolder;
  }
  
  /**
   * IE 10에서 이미지 내부 링크 보더 제거.
   */
  
  img {
    border-style: none;
  }
  

  /**
   * 1. 모든 브라우저 폰트 스타일 변경.
   * 2. Firefox와 Safari 마진 값 제거. 
   */
  
  button,
  input,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * IE 하위브라우저 'overflow' 속성 'hidden'을 보이도록 수정.
   */
  
  button,
  input {
    overflow: visible;
  }
  
  /**
   * 'text-transform' 값을 상속하지 않도록 변경.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * iOS와 Safari에서 클릭 가능한 'input' 유형애 스타일링 할 수 없는 것을 수정.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Firefox 4+에서 내부 'padding'과 보더 스타일을 제거.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  
  /**
   * 'padding' 값 일치 하도록 수정.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Edge와 IE에서 'box-sizing' 값 동일하게 수정.
   * 2. IE에서 'color'는 상속되지 않도록 변경.
   * 3. Remove the padding so developers are not caught out when they zero out
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * IE 10+에서 기 세로 스크롤바 제거.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. IE 10에서 'box-sizing' 값 동일하게 수정.
   * 2. IE 10에서 'padding' 값 삭제.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Chrome에서 커서 확대, 축소 시 동일하게 수정.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Chrome과 Safari에서 검색 타입에 'textfield' 적용.
   * 2. Safari에서 동일하게 보이도록 수정.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * macOS에서 Chrome, Safari에 안쪽 여백 값 제거. 
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. iOS와 Safari에서 클릭되도록 수정.
   * 2. Safari에서 'inherit' 속성 변경.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
 

  /*
   * 모든브라우저에서 동일하게 적용.
   */
  
  summary {
    display: list-item;
  }
  
  /**
   * IE 10+에서 안보이도록 설정.
   */
  
  template {
    display: none;
  }
  
  /**
   * IE 10에서 안보이도록 설정.
   */
  
  [hidden] {
    display: none;
  }

`

export default GlobalStyle
