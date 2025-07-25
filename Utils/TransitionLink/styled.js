import styled from "styled-components";
import { NextLink } from "@/styled/reset";


export const TransitionLinks = styled(NextLink)`
  padding: 6px 10px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.4s ease 0s, color 0.4s ease 0s;
  background-color: ${({ isactive }) => (isactive === "true" ? "#282938" : "transparent")};
  color: ${({ isactive }) => (isactive === "true" ? "#fff" : "#282938")};
  border-radius: 2.5625rem;

  &:hover {
    color: #000;
  }

  @media (${({ theme }) => theme.media.laptop}) {
  font-size: 18px;
  padding: 0;
  background-color: transparent;
  color: ${({ isactive }) => (isactive === "true" ? "#000" : "#282938")};
  }
`;