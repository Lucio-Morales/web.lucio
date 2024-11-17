import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.background.primary};
        color: ${(props) => props.theme.colors.text};
        font-family: ${(props) => props.theme.typography.fontFamily};
        margin:0;
        padding:0;
        box-sizing: border-box;
        }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        color: ${(props) => props.theme.colors.text};
        }

    p {
        margin: 0;
        line-height: 1.6;
        }
        
    a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default GlobalStyles;
