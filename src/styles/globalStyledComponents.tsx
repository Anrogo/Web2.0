import styled, { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px;
`;