import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background-color: #f9f9f9;
    color: #333;
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
