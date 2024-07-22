import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Pretendard-Regular;
        color: white;
    }
    body {
        margin-top: 4.6em;
        background-color: #0E0E0E;
    }
    button {
        border: none;
    }
`;
