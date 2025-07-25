import styled from "styled-components";
import { Container, Title, Paragraph, primaryLink, Img } from "@/styled/mixStyle";

export const HeroSection = styled.section`
  padding-block-start: 10rem;
  padding-block-end: 5rem;
  `

export const HeroContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 31rem), 1fr));
  align-items: center;
  justify-items: center;

  gap: 1.5rem;
  height: 100%;
  `

export const HeroContent = styled.div`
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '50px'});
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  `

export const HeroTitle = styled.h1`
  ${Title}
  color: ${({ theme }) => theme.colors.white};
  `

export const HeroParagraph = styled.p`
  ${Paragraph}
  margin-block-end: 2.125rem;
  color: ${({ theme }) => theme.colors.white};
  `

export const Link = styled(primaryLink)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
    background-color: ${({ theme }) => theme.colors.white};
    color:${({ theme }) => theme.colors.darkBlue};
    border-radius: 2.5625rem;
    font-weight: 500;
    transition: color .7s ease 0s,
      background .7s ease 0s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.BlueGradient};
      transition: color  .7s ease 0s,
      background .7s ease 0s;
    }
`

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transition: opacity 0.7s ease 0s;

  @media (${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }
  `

export const HeroImg = styled(Img)`
  transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
  border-radius: 50%;

  &:hover {
    transform: scale(1.2);
    z-index: 1;
  }

  &:nth-child(2) {
    transform: translateY(-70px);

    &:hover {
      transform: scale(1.2) translateY(-70px);
    }

    @media (${({ theme }) => theme.media.tablet}) {
      transform: translateX(-80px);

      &:hover {
        transform: scale(1.2) translateX(-80px);
      }
    }
  }

  &:nth-child(3) {
    transform: translateY(-100px);

    &:hover {
      transform: scale(1.2) translateY(-100px);
    }

    @media (${({ theme }) => theme.media.tablet}) {
      transform: translateX(-130px);

      &:hover {
        transform: scale(1.2) translateX(-130px);
      }
    }
  }
  `


