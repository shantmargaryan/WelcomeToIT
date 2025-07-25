"use client";
import { OverlayContainer } from "./styled";

export default function Overlay({ setIsOpen, onClick }) {

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      if (onClick) onClick();
    }
  };

  return (
    <OverlayContainer
      onClick={handleClick}
    ></OverlayContainer>
  )
}