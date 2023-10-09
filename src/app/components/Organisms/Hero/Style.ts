import styled from "styled-components";

const StyledHeroContainer = styled.section`
  height: 65vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 2.5rem;

  .hero-img-container {
    position: relative;
    object-fit: cover;

    /* width: 100%; */

    /* .hero-img {
    } */
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    margin: 0 auto;
    max-width: 85%;
    h1 {
      font-size: 2.8rem;
      line-height: 3.5rem;
      font-weight: 300;
      text-transform: capitalize;
    }
    p {
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
  }
`;

export default StyledHeroContainer;
