"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";


export const TeamSection = styled.section`
  ${Section}
  `

export const TeamContainer = styled.div`
  ${Container}
  `

export const TeamTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: 3rem;
  text-align: center;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const TeamList = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax( 300px, 1fr ) );
  justify-content: space-evenly;
  gap: .7rem;
  `

export const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export const TeamImg = styled(Img)`
  width: 200px;
  height: 250px;
  margin-block-end: 1rem;
  border-radius: 1.5rem;
`

export const TeamName = styled.span`
  font-weight: 500;
  `

export const TeamPosition = styled.span`
  max-width: 200px;
  font-weight: 400;
  font-size: 0.7rem;
  text-align: center;
  `