import styled from "styled-components";
import { NextLink } from "@/styled/reset";

export const LogoLink = styled(NextLink)`
  ${NextLink}
  position: relative;
  z-index: 11;
  flex-shrink: 0;
`;

export const  Strong = styled.strong`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;