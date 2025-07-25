import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph } from "@/styled/mixStyle";
import { InputReset, TextareaReset, ButtonReset } from "@/styled/reset";

export const CoursesFormSection = styled.section`
  ${Section}
`

export const CoursesFormContainer = styled.div`
  ${Container}
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const ImgBox = styled.div`
  position: relative;
  isolation: isolate;
  min-height: 400px;

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

export const CoursesFormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 5rem;
  text-align: center;
`

export const CoursesFormTitle = styled.h2`
  ${SecondaryTitle}
`

export const CoursesFormParagraph = styled.p`
  ${Paragraph}
  text-align: center;
  max-width: 550px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 6%;
`

export const Input = styled.input`
  ${InputReset}
  padding: 15px;
  border-radius: 0.5rem;
  border: 0.094rem solid rgba(255, 255, 255, 0.05);
  color:  ${({ theme }) => theme.colors.white};

  &::placeholder{
    color: ${({ theme }) => theme.colors.white};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
`

export const RadioInputField = styled.input`
  appearance: none;

&[type="radio"] {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transform : scale(.9);
  transition: background-color, transform 0.4s ease 0s;

  &:checked {
    background-color: rgba(255, 255, 255, 0.5);
    transform : scale(1.1);
  }
}
`

export const LableContent = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Lable = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  cursor: pointer;
`

export const RadioInput = styled.input`

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
    font-family: "Poppins";
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
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