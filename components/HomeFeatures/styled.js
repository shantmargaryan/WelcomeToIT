import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img, SubTitle } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";

export const FeaturesSection = styled.section`
  ${Section}
  padding-block: 10%;
  `

export const FeaturesContainer = styled.div`
  ${Container}
  `

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 3rem;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `


export const BeforeTitle = styled.span`
  ${SubTitle}
`

export const FeaturesTitle = styled.h3`
  ${SecondaryTitle}
  max-width: 630px;
  text-align: center;
  `

export const List = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  `

export const Item = styled.li`
  padding: min(2rem, 5vw);
  border-radius: 0.5rem;
  `

export const Icon = styled(Img)`
  margin-block-end: 1.5rem;
  `

export const ItemTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  `

export const ItemParagraph = styled.p`
  ${Paragraph}
  `