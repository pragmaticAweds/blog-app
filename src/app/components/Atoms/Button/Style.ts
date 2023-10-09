import { IButtonAttributes } from "@/app/utils/types";
import styled, { css } from "styled-components";

const StyledButton = styled.button<
  Pick<IButtonAttributes, "type" | "prefixicon" | "suffixicon">
>`
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;
  outline: none;
  color: white;
  border-radius: 0.2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.focus};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }

  ${({ type, theme }) =>
    type === "outline" &&
    css`
      border: ${`1px solid ${theme.colors.dark}`};
      background-color: #fff;
      color: ${theme.colors.dark};

      &:hover {
        background-color: ${theme.colors.dark};
        color: #fff;
      }
    `}

  ${({ prefixicon, suffixicon }) =>
    (prefixicon || suffixicon) &&
    css`
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
    `}
`;

export default StyledButton;
