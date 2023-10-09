import React from "react";
import { StyledCard } from "./Style";
import Image from "next/image";
import Button from "../../Atoms/Button";
import Tags from "../../Atoms/Tags";
import CalendarIcon from "../../../../../public/vectors/Calendar";

const Card = () => {
  return (
    <StyledCard>
      <div className="blog-img-wrapper">
        <Image
          className="blog-img"
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="fruit-img"
          fill
        />
      </div>
      <div className="blog-content-intro">
        <h2>Benefit of fruit to the body</h2>
        <p className="truncate-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          accusantium atque aspernatur? Adipisci, autem? At animi deleniti
          commodi, molestiae sapiente exercitationem, minus ducimus, error fugit
          nesciunt amet saepe repudiandae excepturi.
        </p>
        <Button label="Read more" />
      </div>
      <div className="blog-tags-container">
        <Tags label="food" />
        <Tags label="3 Oct 2023" suffixicon={<CalendarIcon />} />
      </div>
    </StyledCard>
  );
};

export default Card;
