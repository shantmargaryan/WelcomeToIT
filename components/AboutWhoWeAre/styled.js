"use client"
import styled from "styled-components";
import { SecondaryTitle, Paragraph, Container, Section, Img, SubTitle } from "@/styled/mixStyle";


export const WhoWeAreSection = styled.section`
  ${Section}
  padding-block-start: 5rem;
  transition: background-color 0.4s ease 0s;
`

export const WhoWeAreContainer = styled.div`
  ${Container}
  `

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  align-items: end;
  gap: 1rem;
  margin-block-end: 3rem;
`

export const Content = styled.div`

&:nth-child(1){
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
}
&:nth-child(2){
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.6s ease 0s, opacity 0.5s ease 100ms;
}
  `

export const BeforeTitle = styled.span`
  ${SubTitle}
  `

export const Title = styled.h2`
  ${SecondaryTitle}
  `

export const Description = styled.p`
  ${Paragraph}
  `

export const WhoWeAreImg = styled(Img)`
  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `
