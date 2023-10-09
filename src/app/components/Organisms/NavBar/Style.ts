import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1rem 2rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  border-bottom: 0.5px solid lightgray;
  text-transform: capitalize;

  .nav-end {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    flex: 0.35;
  }
`;

export const StyledNavLogo = styled.nav`
  display: flex;
  column-gap: 3rem;
`;
