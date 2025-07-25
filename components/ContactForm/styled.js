import styled from "styled-components";
import { Section, Container, Paragraph, primaryLink, SecondaryTitle, Img } from "@/styled/mixStyle";
import { ButtonReset, InputReset, TextareaReset, LinkReset } from "@/styled/reset";


export const ContactSection = styled.section`
  ${Section}
  `

export const ContactContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
`

export const Content = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 8%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 30, 83, 0.50);
    z-index: -1;
  }
`

export const ContactTitle = styled.h3`
  ${SecondaryTitle}
  color: ${({ theme }) => theme.colors.white};
  margin-block-end: 1rem;
`

export const ContactParagraph = styled.p`
  ${Paragraph}
  color: ${({ theme }) => theme.colors.white};

`

export const Wrapper = styled.div`
  padding: 7%;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.5);
`

export const SmallTitle = styled.h3`
  ${SecondaryTitle}
  margin-block-end: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 1rem;
`


export const Input = styled.input`
  ${InputReset}
  padding: 15px;
  border-radius: 0.5rem;
  border: 0.094rem solid rgba(255, 255, 255, 0.05);
  color:  ${({ theme }) => theme.colors.white};
  font-size: 18px;

  &::placeholder{
    color: ${({ theme }) => theme.colors.white};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
  }
`

export const Textarea = styled.textarea`
  ${TextareaReset}
  min-height: 150px;
  padding: 15px;
  border-radius: 0.5rem;
  border: 0.094rem solid rgba(255, 255, 255, 0.05);
  color:  ${({ theme }) => theme.colors.white};
  font-size: 18px;

  &::placeholder{
    color: ${({ theme }) => theme.colors.white};
    font-family: "Poppins" sans-serif;
    font-weight: 500;
    font-size: 18px;
  }
  `


export const Button = styled.button`
  ${ButtonReset}
  position: relative;
  isolation: isolate;
  padding: 0.5rem 2rem;
  margin-block-end: 1rem;
  border-radius: 2.563rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #1B1C2B;
  font-weight: 600;
  line-height: 2rem;
  overflow: hidden;
  transition: background 0.7s ease 0s,
      color 0.7s ease 0s;

  &:hover {
    background: ${({ theme }) => theme.colors.BlueGradient};
    color: ${({ theme }) => theme.colors.white};
  }
`
