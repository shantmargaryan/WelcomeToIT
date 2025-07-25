"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  FooterWrapper, FooterContainer, FooterParagraph, Title, Contact,
  ContactTitle,
  ContactsLinks,
  ScrollToTop
} from "./styled";
import Socials from "@/components/Socials";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Footer() {
  const [isvisible, setIsVisible] = useState(false);
  const t = useTranslations('Footer');

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FooterWrapper>
      <FooterContainer>
        <Contact>
          <div>
            <div>
              <ContactTitle>
                {t('emailTitle')}
              </ContactTitle>
              <ContactsLinks href="mailto:webit.amlerning@gmail.com">
                webit.amlerning@gmail.com
              </ContactsLinks>
            </div>
            <div>
              <ContactTitle>
                {t('callTitle')}
              </ContactTitle>
              <ContactsLinks href="tel:+37498889169">
                +37498889169
              </ContactsLinks>
            </div>
          </div>
          <div>
            <Title>
              {t('title')}
            </Title>
            <FooterParagraph>
              {t('largeDescription')}
            </FooterParagraph>
            <Socials />
          </div>
        </Contact>
        <ScrollToTop onClick={scrollToTop} isvisible={isvisible ? "true" : undefined}>
          <ExpandLessIcon />
        </ScrollToTop>
      </FooterContainer>
    </FooterWrapper>
  )
}
