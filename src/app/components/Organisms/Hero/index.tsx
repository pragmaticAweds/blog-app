import React from "react";
import StyledHeroContainer from "./Style";
import Image from "next/image";
import Button from "../../Atoms/Button";

const HeroSection = () => {
  return (
    <StyledHeroContainer>
      <div className="hero-content">
        <h1>Discover a World of Knowledge.</h1>
        <p className="truncate-text">
          Explore insightful articles and stay up-to-date with the latest trends
          in technology, design, and more.
        </p>
        <div>
          <Button label="Continue Reading" type="outline" />
        </div>
      </div>
      <div className="hero-img-container">
        <Image
          className="hero-img"
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="fruit-img"
          fill
        />
      </div>
    </StyledHeroContainer>
  );
};

export default HeroSection;
