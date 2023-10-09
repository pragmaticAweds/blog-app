"use client";

import { StyledContainer } from "./Styles";
import Card from "./components/Molecules/Card";
import HeroSection from "./components/Organisms/Hero";
import Modal from "./components/Organisms/Modal";
import Signup from "./components/Organisms/Signup/Index";

export default function Home() {
  return (
    <StyledContainer pd="0" flex={1}>
      <HeroSection />
      <section className="section-1">
        {Array(10)
          .fill("i")
          .map((i) => (
            <Card key={i} />
          ))}
      </section>
      {/* <Modal>
        <Signup />
      </Modal> */}
    </StyledContainer>
  );
}
