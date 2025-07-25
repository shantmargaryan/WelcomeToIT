"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const FollowSection = styled.section`
  ${Section}
  `

export const FollowContainer = styled.div`
  ${Container}
  `

export const FollowTitle = styled.h2`
  ${SecondaryTitle}
  margin-block-end: 3rem;
  text-align: center;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const List = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 270px, 1fr ) );
  gap: 1.5rem;
  `

export const Item = styled.li`

&:nth-child(1){
  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  }
&:nth-child(2){
  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.6s ease 0s, opacity 0.5s ease 100ms;
  }
&:nth-child(3){
  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.7s ease 0s, opacity 0.5s ease 200ms;
  }
&:nth-child(4){
  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.8s ease 0s, opacity 0.5s ease 300ms;
}
&:nth-child(5){
  transform: scale(${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.9s ease 0s, opacity 0.5s ease 400ms;
}
`

export const FollowImg = styled(Img)`
  width: 17rem;
  height: 1.5rem;
  margin-block-end: 2rem;
  `

export const SmallTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 1.5rem;
  font-weight: 500;
  `

export const Decoration = styled.p`
  ${Paragraph}
  `