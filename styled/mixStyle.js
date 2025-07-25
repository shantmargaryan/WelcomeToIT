"use client"
import styled, { css } from "styled-components";
import { Link } from '@/i18n/navigation';
import  Image  from "next/image";

export const Main = styled.main`
  min-height: 100%;
`;

export const Container = css`
  max-width: ${({ theme }) => theme.container.width}px;
  padding-inline: ${({ theme }) => theme.container.offset}px;
  margin-inline: auto;
`;

export const Section = css`
  margin-block-end: 10%;
`;

export const SubTitle = css`
  display: block;
  margin-block-end: .5rem;
  font-weight: 500;
`;

export const Title = css`
  margin: 0;
  margin-block-end: 1.5625rem;
  font-size: clamp(2rem, 5vw, 2.5rem);
  line-height: 120%;
`;

export const SecondaryTitle = css`
  margin: 0;
  margin-block-end: 1rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  line-height: 130%;
  letter-spacing: 0.03em;
`;

export const Paragraph = css`
  margin: 0;
  font-weight: 400;
  opacity: .7;
`;

export const primaryLink = styled(Link)`
  display: inline-block;
  color: inherit;
  text-decoration: none;
`;

export const Img = styled(Image)`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  font-family: inherit;
  font-size: inherit;
`
