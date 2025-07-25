"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img, primaryLink } from "../../styled/mixStyle";
import { ListReset } from "../../styled/reset";

export const BlogSection = styled.section`
  ${Section}
  `

export const BlogContainer = styled.div`
  ${Container}
  `

export const BlogTitle = styled.h2`
  ${SecondaryTitle}
  margin-block-end: 3rem;
  `

export const List = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 300px, 1fr ) ); ;
  gap: 1.5rem;
  `

export const Item = styled.li`
  overflow: hidden;
  `

export const BlogImg = styled(Img)`
  margin-block-end: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  `

export const ItemTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 1.5rem;
  `

export const ItemParagraph = styled.p`
  ${Paragraph}
  margin-block-end: 1rem;
  `

export const ReadMore = styled(primaryLink)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #282938;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: translateX(5px);
  }
  `