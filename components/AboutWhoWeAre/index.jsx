"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  WhoWeAreSection,
  WhoWeAreContainer,
  Wrapper,
  Content,
  BeforeTitle,
  Title,
  Description,
  WhoWeAreImg
} from "./styled";
import IntersectionComponent from "@/Utils/Intersection";

export default function AboutWhoWeAre() {
  const t = useTranslations("AboutWhoWeAre");
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  const items = [
    {
      beforeTitle: t("beforeTitle"),
      title: t("title"),
      description: t("description"),
    },
    {
      title: t("secoundTitle"),
      description: t("secoundDescription"),
    },
  ]

  return (
    <WhoWeAreSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <WhoWeAreContainer>
        <Wrapper>
          {
            items.map((item, index) => (
              <Content key={index} isVisible={isVisible}>
                <BeforeTitle>
                  {item.beforeTitle}
                </BeforeTitle>
                <Title>
                  {item.title}
                </Title>
                <Description>
                  {item.description}
                </Description>
              </Content>
            ))
          }
        </Wrapper>
      </WhoWeAreContainer>
    </WhoWeAreSection>
  );
}