import { HTMLProps, ReactNode } from "react";

export interface IconAttributes {
  prefixicon?: ReactNode;
  suffixicon?: ReactNode;
}

export interface IButtonAttributes
  extends IconAttributes,
    HTMLProps<HTMLButtonElement> {
  label: string;
  type?: "primary" | "outline";
}

export interface ITagsAttributes extends IconAttributes {
  label: string;
}

export interface InputAttributes
  extends IconAttributes,
    HTMLProps<HTMLInputElement> {
  flex?: number;
}

export interface IContainerAttributes {
  flow?: string;
  flex?: number;
  pd?: string;
  gap?: string;
  bg?: string;
}
