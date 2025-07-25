"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  AboutSection,
  AboutContainer,
  Content,
  AboutTitle,
  AboutParagraph,
  AboutVideo,
} from "./styled";
import IntersectionComponent from "@/Utils/Intersection";

export default function AboutHero() {
  const t = useTranslations("AboutHero");
  const [isvisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  return (
    <AboutSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <AboutContainer>
        <Content isvisible={isvisible ? "true" : undefined}>
          <AboutTitle>
            {t("title")}
          </AboutTitle>
          <AboutParagraph>
            {t("description")}
          </AboutParagraph>
        </Content>
        <AboutVideo
          src="https://ccix1anvvnzyhdq1.public.blob.vercel-storage.com/video.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </AboutContainer>
    </AboutSection>
  );
}