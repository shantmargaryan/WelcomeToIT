"use client"
import styled from "styled-components";
import { Section, Container, SubTitle, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const FeaturesSection = styled.section`
  ${Section}
  `

export const FeaturesContainer = styled.div`
  ${Container}
  `

export const BeforeTitle = styled.span`
  ${SubTitle}
  `

export const FeaturesTitle = styled.h3`
  ${SecondaryTitle}
  `

export const FeaturesList = styled.ul`
  ${ListReset}
  `

export const FeaturesItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (${({ theme }) => theme.media.laptop}) {
    flex-direction: row;
    align-items: center;

    &:nth-child(2n) {
      flex-direction: row-reverse;
  }
  }

  &:not(:last-child) {
    margin-block-end: 3rem;
  }
  `


export const FeaturesText = styled.p`
    ${Paragraph}
    `

export const FeaturesImg = styled(Img)`
  `