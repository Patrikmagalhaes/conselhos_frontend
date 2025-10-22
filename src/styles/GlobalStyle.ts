import { createGlobalStyle } from 'styled-components'
import '/src/assets/fonts/metal-gothic-font/MetalGothic-DemoVersion-Regular-3a90.woff'
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


@font-face {
  font-family: "MetalGhotic";
  src: url("./src/assets/fonts/metal-gothic-font/MetalGothic-DemoVersion-Regular-3a90.woff") format("woff");
  font-weight: bold;
}

  body {
    font-family: MetalGhotic, sans-serif;
    background-color: #000000ff;
    color: #ffffffff;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`
