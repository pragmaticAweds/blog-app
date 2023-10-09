import React, { ReactNode } from "react";
import StyledModalContainer from "./Style";

const Modal = ({ children }: { children: ReactNode }) => {
  return <StyledModalContainer>{children}</StyledModalContainer>;
};

export default Modal;
