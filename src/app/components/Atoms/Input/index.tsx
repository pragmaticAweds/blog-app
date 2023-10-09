import React from "react";
import StyledInputContainer, { StyledInput } from "./Style";
import { InputAttributes } from "@/app/utils/types";

const Input = ({ prefixicon, suffixicon, flex, ...rest }: InputAttributes) => {
  return (
    <StyledInputContainer flex={flex} {...rest}>
      {prefixicon || null}
      <StyledInput {...rest} />
      {suffixicon || null}
    </StyledInputContainer>
  );
};

export default Input;
