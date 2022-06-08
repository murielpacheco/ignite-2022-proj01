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

   :focus {
      outline: transparent;
      box-shadow: 0 0 0 2px var(--green-500);
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

   body, input, textarea, button {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
   }

`;