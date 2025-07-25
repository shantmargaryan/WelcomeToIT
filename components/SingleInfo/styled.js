import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";


export const SingleInfoSection = styled.section`
  ${Section}
  `

export const SingleInfoContainer = styled.div`
  ${Container}
  `

export const SingleInfoTitle = styled.h2`
  ${SecondaryTitle}
  max-width: 50rem;
  `

export const SingleInfoParagraph = styled.p`
  ${Paragraph}
  max-width: 50rem;
  margin-block-end: 2rem;
  `

export const SingleInfoLargParagraph = styled.p`
  ${Paragraph}
    margin-block-end:3rem;
  `

export const SingleInfoImg = styled(Img)`
  width: 100%;
  aspect-ratio: 16/9;
  margin-block-end: 2rem;
  border-radius:  0.5rem;
  `

export const Item = styled.li`
  margin-block-end: 1rem;
  `