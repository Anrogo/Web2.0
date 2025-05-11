import { colors } from "@/utils/colors";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;

export const HeaderLink = styled.a`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: ${colors.white};

    &:hover {
        text-decoration: underline;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    width: 400px;
    padding: 16px;
    border-radius: 32px;
`;

export const BarOver7 = styled.span`
    font-size: 20px;
    color: ${colors.white};
`;