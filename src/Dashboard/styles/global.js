import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    transition: all 0.3s ease-in-out;
  }
`