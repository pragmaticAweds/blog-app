import React from "react";
import StyledTag from "./Style";
import { ITagsAttributes } from "@/app/utils/types";

const Tags = ({ label, prefixicon, suffixicon }: ITagsAttributes) => {
  return (
    <StyledTag prefixicon={prefixicon} suffixicon={suffixicon}>
      {prefixicon || null} {label} {suffixicon || null}
    </StyledTag>
  );
};

export default Tags;
