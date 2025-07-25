"use client"
import styled from "styled-components";
import { Section, Container, SecondaryTitle, Img } from "@/styled/mixStyle";
import { ListReset } from "@/styled/reset";

export const ProjectInfoWrapper = styled.section`
${Section}
`

export const ProjectInfoImg = styled(Img)`
  margin-bottom: 1.25rem;
`;

export const ProjectInfoContainer = styled.div`
  ${Container}
  max-width: 1065px;
`;

export const ProjectInfoList = styled.ul`
  ${ListReset}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  border-bottom: 2px solid rgba(40, 41, 56, .3);
  padding-bottom: 20px;

  [data-theme="dark"] & {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProjectInfoListItem = styled.li`

`;

export const ProjectInfoTitle = styled.h3`
  ${SecondaryTitle}
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ProjectInfoSpan = styled.span`
  font-weight: 500;
`;

