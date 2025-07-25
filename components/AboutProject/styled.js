"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";

export const AboutProjectWrapper = styled.section`
  ${Section}
`;

export const AboutProjectContainer = styled.div`
  ${Container}
  max-width: 840px;
`;

export const AboutProjectTitle = styled.h3`
  ${SecondaryTitle}
`;

export const AboutProjectParagraph = styled.p`
  ${Paragraph}
`;

export const AboutProjectList = styled.ul`
  ${ListReset}
  margin-block: 1.8rem;
`;

export const AboutProjectListItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: .5rem;

  &:not(:last-child) {
    margin-bottom: 1.8rem;
  }

  &::before {
    content: "•";
    width: 1em;
    height: 1em;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;






