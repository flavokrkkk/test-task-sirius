import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }

  table {
    margin: 0;
  }
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const AppContent = styled.div`
  height: 100vh;
  width: 82.5%;
`;
