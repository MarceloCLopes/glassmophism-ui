import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        
    --heading: #667EEA;
    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }

  h1, h2, h3, h4, h5, h6, input, img{
    margin:0;
    padding: 0;
  }
`;
