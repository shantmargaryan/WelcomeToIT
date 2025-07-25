import styled from "styled-components";
import { Section, Container, Paragraph, Title } from "@/styled/mixStyle";

export const HeroSection = styled.section`
  ${Section}
  padding-block-start: 10rem;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const HeroContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  `

  export const HeroContent = styled.div`
  max-width: 50rem;
  `

  export const HeroTitle = styled.h1`
  ${Title}
  `

export const HeroParagraph = styled.p`
  ${Paragraph}
  `
