import styled from "styled-components";
import { Section, Container, SecondaryTitle, Paragraph, Img } from "@/styled/mixStyle";


export const ClientsSection = styled.section`
  ${Section}

  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 400ms;
  `

export const ClientsContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: ${({ theme }) => theme.Response.gridCustom};
  gap: 1.5rem;

  & .swiper {
    margin: 0;
    padding-block-end: 2.5rem;

    & .swiper-button-next,
    & .swiper-button-prev {
      display: none;
      width: 30px;
      height: 30px;
      top: 65%;
      border-radius: 50%;
      transition: background-color 0.4s ease 0s;

      @media (${({ theme }) => theme.media.mobile}) {
        display: flex;
      }

      &::after {
        font-size: 20px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.darkBlue};
        transition: color 0.4s ease 0s;

        [data-theme="dark"] & {
          color: ${({ theme }) => theme.colors.white};
        }
      }

      &:hover {
        background-color:#5239FA ;
      }

      &:hover::after {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    & .swiper-button-next {

      &::after {
      }
  }

    & .swiper-button-prev {
      left: 87%;
      &::after {
      }
    }
}
`

export const Content = styled.div`
  max-width: 25.438rem;
`

export const ClientsTitle = styled.h3`
  ${SecondaryTitle}
  `

export const ClientsParagraph = styled.p`
  ${Paragraph}
  `

export const Text = styled.p`
  ${Paragraph}
  margin-block-end: 2.5rem;
  font-size: clamp(1rem, 3vw, 1.3rem);
  `

export const SliderContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  `

export const Icon = styled(Img)`
  `

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  `

export const Name = styled.span`
  margin-block-end: .2rem;
  font-size: 1.125rem;
  font-weight: 500;
  `

export const Position = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  `