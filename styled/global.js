"use client"
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

/*===NULL CSS===========================================*/
*,
*:before,
*:after {
box-sizing: inherit;
}
html {
box-sizing: border-box;
}
html,
body{
width: 100%;
height: 100%;
scroll-behavior: smooth;
scroll-padding-top: 11rem;
}
body
{
margin: 0;
font-size: 16px;
font-family: var(--font-poppins);
color:  ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.white};
transition: opacity 0.4s ease 0s,
background-color 0.4s ease 0s,
transform 0.4s ease 0s,
filter 0.4s ease 0s;
background: ${({ theme }) => theme.colors.BlueGradient};


&.page-transition {
  opacity: 0;
  background-color: black;
  transform: translateY(40px);
  filter: blur(12px);
}
}

[data-theme="dark"] body {
  color:  ${({ theme }) => theme.colors.white};
  background-color:  ${({ theme }) => theme.colors.darkBlue};
}

/*===/NULL CSS===========================================*/
`;

export default GlobalStyle;
