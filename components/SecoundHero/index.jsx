"use client";
import { useState } from "react";
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroParagraph,
} from "./styled";
import IntersectionComponent from "@/Utils/Intersection";



export default function SecoundHero({ beforeTitle, title, description }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <HeroSection isVisible={isVisible}>
      <IntersectionComponent onIntersect={handleIntersect} />
      <HeroContainer>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroParagraph>{description}</HeroParagraph>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}