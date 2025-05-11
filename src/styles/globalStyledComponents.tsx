import { colors } from "@/utils/colors";
import styled, { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${colors.blue3};
    color: ${colors.white};
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px
`;