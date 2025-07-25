"use client"
import styled from "styled-components";
import { Title, Paragraph, Container, Section, Img, SubTitle } from "@/styled/mixStyle";


export const AboutSection = styled.section`
  ${Section}
  padding-block-start: 10rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  `

export const AboutContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  gap: 1.5rem;
  padding: 3rem;
  margin-inline: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  `

export const Content = styled.div`

  transform: translateY(${({ isvisible }) => isvisible ? '0' : '50px'});
  opacity: ${({ isvisible }) => isvisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  max-width: 40rem;
  `

export const BeforeTitle = styled.span`
  ${SubTitle}
  `

export const AboutTitle = styled.h2`
  ${Title}
  margin-block-end: 1rem;
  `

export const AboutParagraph = styled.p`
  ${Paragraph}
  `

export const AboutVideo = styled.video`
  width: 100%;
  height: 400px;
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  object-fit: cover;
  `
