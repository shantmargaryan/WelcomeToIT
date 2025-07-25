"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  BenefitsSection,
  BenefitsContainer,
  BenefitsTitle,
  BenefitsList,
  BenefitsItem,
  BenefitsImg,
  SmallParagraph,
  SmallTitle,
} from "./styled";
import { svgs } from "./svgs";
import IntersectionComponent from "@/Utils/Intersection";
export default function AboutBenefits() {
  const t = useTranslations("AboutBenefits")
  const t2 = useTranslations("AboutBenefits.Items")
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  const items = [
    "firstSmallText",
    "secondSmallText",
    "thirdSmallText"
  ]

  return (
    <BenefitsSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <BenefitsContainer>
        <BenefitsTitle isVisible={isVisible}>
          {t("title")}
        </BenefitsTitle>
        <BenefitsList>
          {items.map((item, index) => (
            <BenefitsItem key={item}
              isVisible={isVisible}>
              <BenefitsImg
                src={svgs[index]?.src}
                alt={svgs[index]?.alt}
                width={30}
                height={30}
              />
              <SmallTitle>
                {t2(`${item}.title`)}
              </SmallTitle>
              <SmallParagraph>
                {t2(`${item}.description`)}
              </SmallParagraph>
            </BenefitsItem>
          ))}
        </BenefitsList>
      </BenefitsContainer>
    </BenefitsSection>
  )
}