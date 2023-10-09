import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 17rem;

  .blog-img-wrapper {
    position: relative;
    object-fit: contain;
    flex: 0.8;
    width: 100%;

    .blog-img {
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }

  .blog-content-intro {
    flex: 0.4;
    row-gap: 0.5rem;
    padding: 0.3rem 0;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 300;
      text-transform: capitalize;
    }
    p {
      font-size: 0.8rem;
      font-weight: 300;
    }
  }

  .blog-tags-container {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`;
