import styled from "styled-components";
import { ListReset, NextLink, ButtonReset, LinkReset } from "../../styled/reset";
import { Container } from "../../styled/mixStyle";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tintBlue};
`;

export const HeaderContainer = styled.div`
  ${Container}
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  padding-block: 1rem;


  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 11;
    background-color: ${({ theme }) => theme.colors.tintBlue};
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: ${({ isopen }) => (isopen === "true" ? 0 : "-100%")};
  opacity: ${({ isopen }) => (isopen === "true" ? 1 : 0)};
  padding-inline-start: 1.5625rem;
  padding-top: ${({ headerheight }) => headerheight}px;
  right: 0;
  z-index: 10;
  display: inline-flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 75%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: top ease 0.6s, opacity ease 0.6s;

  @media (${({ theme }) => theme.media.laptop}) {
    position: static;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 12;
    height: auto;
    opacity: 1;
    padding: 0;
    background-color: transparent;
  }
`;

export const NavList = styled.ul`
  ${ListReset}
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (${({ theme }) => theme.media.laptop}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .625rem .7rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 2.5625rem;
  transform: translateY(${({ isvisible }) => isvisible ? '0' : '-100%'});
  opacity: ${({ isvisible }) => isvisible ? '1' : '0'};
  transition: transform 0.6s ease 0s, opacity 0.6s ease 0s;
  }
`;

export const Burger = styled.button`
  ${ButtonReset}
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 12;
  flex-shrink: 0;
  width: 30px;
  height: 20px;
  border: none;
  cursor: pointer;

  @media (${({ theme }) => theme.media.laptop}) {
    display: none;
  }
`;

export const BurgerLine = styled.span`
  width: 100%;
  height: 2.7px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  &:nth-child(2) {
    width: 70%;
  }

  &:nth-child(3) {
    width: 50%;
  }
`;

export const UtilButtons = styled.div`
  display: flex;
  gap: 1rem;
  z-index: 12;
`;
