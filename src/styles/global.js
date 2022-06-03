import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
      --gray-900: #121214;
      --gray-800: #202024;
      --gray-700: #29292e;
      --gray-600: #323238;
      --gray-500: #7c7c8a;
      --gray-400: #8d8d99;
      --gray-300: #c4c4cc;
      --gray-100: #e1e1e6;
      --white: #ffffff;
      --green-500: #00875f;
      --green-300: #00B37e;

   }
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
   }

   body {
      background-color: var(--gray-900); 
      color: var(--gray-300);
      -webkit-font-smoothing: antialiased;
   }

`;