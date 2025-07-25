import styled from "styled-components";
import { Container, SecondaryTitle, Paragraph } from "@/styled/mixStyle";
import { ListReset, ButtonReset, LinkReset } from "@/styled/reset";

export const FooterWrapper = styled.footer`
padding-block-start: 3rem;
background-color: ${({ theme }) => theme.colors.tintBlue};
`

export const FooterContainer = styled.div`
  ${Container};
  `

export const Title = styled.h3`
  ${SecondaryTitle}
  color: ${({ theme }) => theme.colors.darkBlue};
  `

export const FooterParagraph = styled.p`
  ${Paragraph}
  max-width: 28rem;
  margin-block-start: 1rem;
  color: ${({ theme }) => theme.colors.darkBlue};
  `



export const Contact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`

export const ContactTitle = styled.h3`
  ${SecondaryTitle}
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.2rem;
`

export const ContactsLinks = styled.a`
  ${LinkReset}
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 400;
`

export const ScrollToTop = styled.button`
  ${ButtonReset}
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  pointer-events: ${({ isvisible }) => (isvisible ? "auto" : "none")};
  transition: opacity 0.4s ease 0s;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.yellow};

  svg {
    transition: transform 0.4s ease 0s;
    fill: ${({ theme }) => theme.colors.darkBlue};
  }

  &:hover svg {
    transform: translateY(-2px);
  }
  `