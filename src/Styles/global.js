import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
  * {
    outline: 0;
    box-sizing: border-box;
    background: #F7F7F7;
    font-family: 'Inter', sans-serif;
    color: #6D6E71
  }
  body, input, button {
    font-family: 'Inter', sans-serif;
    
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  `;