import styled from "styled-components";
import { IContainerAttributes } from "../utils/types";

export const StyledBody = styled.body`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled.div<IContainerAttributes>`
  flex: ${({ flex }) => flex || 1};
  overflow: ${({ flow }) => flow || "auto"};
  padding: ${({ pd }) => pd || "1.5rem 2rem"};
  gap: ${({ gap }) => gap || "0"};
  background: ${({ bg }) => bg};

  .section-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    flex: 1;
  }
`;

export const StyledFormContainer = styled.form`
  height: 50vh;
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
