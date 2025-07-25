"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Img } from "@/styled/mixStyle";
import { ListReset, NextLink, ButtonReset } from "@/styled/reset";


export const ProjectsSection = styled.section`
  ${Section}
  `

export const ProjectsContainer = styled.div`
  ${Container}
  `

export const ProjectsTitle = styled.h2`
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
  grid-template-columns: repeat( auto-fit, minmax( 300px, 1fr ) );
  justify-items: center;
  gap: 2rem;
  `

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  transform:scale( ${({ isVisible }) => isVisible ? '1' : '0'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const SmallTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 1.5rem;
  font-weight: 500;
  `

export const TitleLink = styled(NextLink)`
  transition: color 0.4s ease 0s;
  &:hover {
    color: rgb(231, 178, 44);
  }
  `

export const Page = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 9;
  padding: 5px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.tintBlue};
  color: ${({ theme }) => theme.colors.white};
  `

export const Language = styled.span`
  margin-block-end: 0.5rem;
  font-weight: 500;
  `

export const Development = styled.span`
  margin-block-end: 0.5rem;
  font-weight: 500;
  `

export const Link = styled(NextLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    stroke-width: 1.5px;
    transition: transform 0.4s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
  `

export const ImgLink = styled(NextLink)`
  position: relative;
  `

export const ProjectsImg = styled(Img)`
  display: block;
  margin-block-end: 15px;
  border-radius: 15px;
  transition: opacity 0.4s ease, filter 0.4s ease;
  opacity: ${({ imageLoading }) => imageLoading ? '0' : '1'};
  filter: blur(${({ imageLoading }) => imageLoading ? '10px' : '0px'});
`;

export const Price = styled.span`
  margin-block-end: 0.5rem;
  font-weight: 600;
  `

export const LoadMoreButton = styled.button`
  ${ButtonReset}
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  margin: 50px auto 0 auto;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  transition: background-color 0.3s ease,
  transform 0.3s ease;
  transform: translateY(0);

  &:hover {
    transform: translateY(-2px);
  }
`;
