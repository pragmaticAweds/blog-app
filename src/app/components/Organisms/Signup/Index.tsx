import { StyledContainer, StyledFormContainer } from "@/app/Styles";
import React from "react";
import Input from "../../Atoms/Input";

const Signup = () => {
  return (
    <StyledContainer bg="white">
      <StyledFormContainer action="" method="post">
        <Input />
        <Input />
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Signup;
