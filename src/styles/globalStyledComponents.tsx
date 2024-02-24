import styled, { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
    body {
    font-family: sans-serif, Arial;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px
`;