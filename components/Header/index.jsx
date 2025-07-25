"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { HeaderWrapper, HeaderContainer } from "./styled";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const t = useTranslations("NavLinks");



  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.body.style.paddingRight = isOpen
        ? `${window.innerWidth - document.body.offsetWidth}px`
        : "0";
      document.body.style.overflow = isOpen ? "hidden" : "visible";
    }
  }, [isOpen]);

  const getActiveLink = () => {
    const pathname = usePathname();
    return pathname.slice(4).toLowerCase() === "" ? "home" : pathname.slice(4).toLowerCase();
  };

  const linkActive = getActiveLink();

  return (
    <HeaderWrapper
      ref={headerRef}>
      <HeaderContainer>
        <Logo />
        <Navigation
          isOpen={isOpen}
          headerHeight={headerRef?.current?.offsetHeight}
          linkActive={linkActive}
          setIsOpen={setIsOpen}
          t={t}
        />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </HeaderContainer>
    </HeaderWrapper>
  );
}