import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html{
    font-size: 16px;
  }
  body{
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  html, body, #__next{
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    &:focus, &:active {
      outline: none;
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
`;

export default GlobalStyles;
