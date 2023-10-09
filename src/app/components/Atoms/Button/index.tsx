import React from "react";
import StyledButton from "./Style";
import { IButtonAttributes } from "@/app/utils/types";

const Button = ({
  label,
  prefixicon,
  suffixicon,
  ...rest
}: IButtonAttributes) => {
  return (
    <StyledButton prefixicon={prefixicon} suffixicon={suffixicon} {...rest}>
      {prefixicon || null} {label} {suffixicon || null}
    </StyledButton>
  );
};

export default Button;
