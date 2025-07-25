import styled from "styled-components";
import { LinkReset } from "@/styled/reset";


export const Number = styled.a`
  ${LinkReset}
  margin: 0 auto;
  transition: colot 0.4s ease 0s;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }
  `