import { InputAttributes } from "@/app/utils/types";
import styled from "styled-components";

const StyledInputContainer = styled.div<Pick<InputAttributes, "flex">>`
  display: flex;
  border: 1px solid lightgray;
  color: ${({ theme }) => theme.colors.focus};
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.6rem;
  column-gap: 0.5rem;
  flex: ${({ flex }) => flex || 0};
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
`;

export default StyledInputContainer;
