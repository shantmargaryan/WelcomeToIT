"use client"
import styled from "styled-components";
import { SecondaryTitle, Section, Container, primaryLink, Img } from "@/styled/mixStyle";


export const ProjectSection = styled.section`
  ${Section}
`

export const ProjectContainer = styled.div`
  ${Container}
  `



export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: .5rem;
  margin-block-end: 3rem;
  `

export const ProjectTitle = styled.h3`
  ${SecondaryTitle}
  margin: 0;
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const ViewMore = styled(primaryLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;

  & svg {
    stroke-width: 1.5px;
    transition: transform 0.4s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
  `

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-block: 3rem;
  border-radius: 1rem;
  `


export const ProjectImg = styled(Img)`
  width: 100%;
  height: 100%;
  `
