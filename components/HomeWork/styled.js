import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph } from "../../styled/mixStyle";
import { ListReset } from "../../styled/reset";
import Link from "next/link";



export const HomeWorkSection = styled.section`
  ${Section}
  padding-block: 10%;
  transition: background-color 0.4s ease 0s;
  transform: translateY(${({ isvisible }) => isvisible ? '0' : '50px'});
  opacity: ${({ isvisible }) => isvisible ? '1' : '0'};
  pointer-events: ${({ isvisible }) => isvisible ? 'auto' : 'none'};
  transition: transform 0.5s ease 0s,
    opacity 0.5s ease 0s,
    background-color 0.4s ease 0s;
  `

export const HomeWorkContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  gap: 1.5rem;
  `

export const HomeWorkContent = styled.div`
  
  `

export const HomeWorkTitle = styled.h2`
  ${SecondaryTitle}
  `

export const HomeWorkParagraph = styled.p`
  ${Paragraph}
  margin-block-end: 1rem;
  `

export const HomeWorkLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #2405F2;
  font-weight: 500;
  line-height: 2rem;

  & svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
  `

export const List = styled.ul`
  ${ListReset}
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  counter-reset: number;


  @media (${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  `

export const CounterNumber = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  margin-block-end: 1rem;

& svg {
  width: 2.5rem;
  height: 2.5rem;
}

&::after {
    counter-increment: number;
    content: "0" counter(number); 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 500;
  }
  `

export const ListItem = styled.li`
  
`

export const SmallTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 1.5rem;
  font-weight: 500;
  `

export const SmallParagraph = styled.p`
  ${Paragraph}
  `