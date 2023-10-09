import React from "react";
import { StyledNavLogo, StyledNav } from "./Style";
import Button from "../../Atoms/Button";
import PencilIcon from "../../../../../public/vectors/Pencil";
import Input from "../../Atoms/Input";
import SearchIcon from "../../../../../public/vectors/Search";

const Navbar = () => {
  const navLinks = ["new", "trending", "recent"];
  return (
    <StyledNav>
      <StyledNavLogo>Trendz</StyledNavLogo>
      <div className="nav-end">
        <Input prefixicon={<SearchIcon />} flex={1} />
        <Button label="Create" prefixicon={<PencilIcon />} />
      </div>
    </StyledNav>
  );
};

export default Navbar;
