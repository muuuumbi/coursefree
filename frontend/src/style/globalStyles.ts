import { css } from '@emotion/react'

import { colorPalette } from './colorPalette'

export default css`
  ${colorPalette}

  :root {
    --dimmed-zindex: 10;
    --alert-zindex: 11;
    --fullWidth: 450px;
    overflow-y: hidden;
  }
  /* reset */
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  textarea,
  button {
    margin: 0;
    padding: 0;
  }
  fieldset,
  img {
    border: 0 none;
  }
  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  input,
  select,
  textarea,
  button {
    font-size: 100%;
    vertical-align: middle;
  }
  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    -webkit-text-size-adjust: none;
  } /* 뷰표트 변환시 폰트크기 자동확대 방지 */
  input[type='text'],
  input[type='password'],
  input[type='submit'],
  input[type='search'] {
    -webkit-appearance: none;
    border-radius: 0;
  }
  input:checked[type='checkbox'] {
    background-color: #666;
    -webkit-appearance: checkbox;
  }
  button,
  input[type='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='file'] {
    -webkit-appearance: button;
    border-radius: 0;
  }
  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  body {
    background: #fff;
  }
  body,
  th,
  td,
  input,
  select,
  textarea,
  button {
    font-size: 14px;
    line-height: 1.5;
    font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
  } /* color값은 디자인가이드에 맞게사용 */
  a {
    text-decoration: none;
  }
  a:active,
  a:hover {
    text-decoration: none;
  }
  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }
  .App {
    text-align: center;
    max-width: 450px;
    margin: 0 auto; /* 중앙 정렬을 위해 가운데 정렬 */
    background-color: white;
    height: calc(var(--vh, 1vh) * 100);
    position: relative;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  body {
    overflow: -moz-scrollbars-none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer, Edge */
    scrollbar-width: none; /* Firefox */
    overflow: hidden;
    touch-action: none;
  }
  a {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .swiper-wrapper {
    overflow: visible;
  }
  .swiper-slide {
    opacity: 0.4;
    transition: opacity 0.3s;
  }
  .swiper-slide-active {
    opacity: 1;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
