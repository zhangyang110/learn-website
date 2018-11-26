import { injectGlobal } from 'styled-components';
import fontGlobal from './globalFont.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'mzd';
    src: url(${fontGlobal}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'mzd';
  }

  body.fontLoaded {
    font-family: 'mzd';
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'mzd';
    line-height: 1.5em;
  }

  ul.navbar-nav   a.nav-link:hover { color: #fb0b00    !important; }

`;
