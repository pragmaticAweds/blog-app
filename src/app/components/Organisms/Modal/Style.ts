import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  backdrop-filter: blur(5px);
`;

export default StyledModalContainer;
