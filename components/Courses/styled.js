"use client";
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";
import { ListReset, NextLink } from "@/styled/reset";


export const CoursesSection = styled.section`
  ${Section}
  padding-block: 3rem;
  transition: background-color  0.4s ease 0s;
  
`;

export const CoursesContainer = styled.div`
  ${Container}
`;

export const CoursesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 5rem;
  text-align: center;

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
`

export const ImgContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-block-end: 1rem;
`

export const TeacherBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const TeacherName = styled.span`
  font-weight: 600;
  letter-spacing: 0.05em;
`

export const TeacherPosition = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 0.2rem 0.5rem;
  border-radius: 2.5625rem;
  color: ${({ theme }) => theme.colors.darkBlue};
`

export const TeacherImg = styled(Img)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const CoursesCurrentTitle = styled.h2`
  ${SecondaryTitle}
`

export const CoursesCurrentDescription = styled.p`
  ${Paragraph}
  max-width: 600px;
`

export const CoursesImg = styled(Img)`
margin-block-end: 20px;
border-radius: 10px;

transform: scale( ${({ isVisible }) => isVisible ? '1' : '0'});
opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
`;

export const CoursesBefourTitle = styled.span`
margin-block-end: 10px;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.yellow};
padding: 5px 10px;
border-radius: 2.5625rem;
color: ${({ theme }) => theme.colors.darkBlue};
`;

export const CoursesTitle = styled.h2`
  ${SecondaryTitle}
  font-size: 1.5rem;
`;

export const CoursesDescription = styled.p`
  ${Paragraph}
  margin-block-end: 20px;
`;

export const CoursesList = styled.ul`
${ListReset}
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 20px;
`

export const CoursesItem = styled.li`
display: inline-flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
`

export const CoursesLink = styled(NextLink)`

  &:hover {
    text-decoration: underline;
  }
`