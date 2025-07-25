"use client";
import { HeroSection, HeroContainer, HeroContent, HeroTitle, HeroParagraph, Link, HeroImg, ImgBox } from "./styled";
import { useState } from "react";
import IntersectionComponent from "@/Utils/Intersection";
import { Img } from "./image";

export default function Hero({ title, description, img, link, href }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleIntersect = () => {
    setIsVisible(true);
  };


  return (
    <HeroSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <HeroContainer>
        <HeroContent isVisible={isVisible}>
          <HeroTitle>
            {title}
          </HeroTitle>
          <HeroParagraph>
            {description}
          </HeroParagraph>
          <Link href={href}>
            {link}
          </Link>
        </HeroContent>
        <ImgBox isVisible={isVisible}>
          {
            Img.map(({ id, src, alt }) => (
              <HeroImg key={id} src={src} alt={alt}
                width={200} height={200}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            ))
          }
        </ImgBox>
      </HeroContainer>
    </HeroSection >
  );
}
