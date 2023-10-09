import { ITagsAttributes } from "@/app/utils/types";
import styled, { css } from "styled-components";

const StyledTag = styled.div<
  Pick<ITagsAttributes, "prefixicon" | "suffixicon">
>`
  height: 1.4rem;

  display: grid;

  place-content: center;

  font-size: 0.65rem;

  padding: 0 0.5rem;

  width: max-content;

  background-color: ${({ theme }) => theme.colors.dark};

  color: white;

  border-radius: 0.1rem;

  cursor: pointer;

  ${({ prefixicon, suffixicon }) =>
    (prefixicon || suffixicon) &&
    css`
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
    `}
`;

export default StyledTag;
