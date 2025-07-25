"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  TeamSection,
  TeamContainer,
  TeamTitle,
  TeamList,
  TeamItem,
  TeamImg,
  TeamName,
  TeamPosition
} from "./styled";
import { images } from "./images";
import IntersectionComponent from "@/Utils/Intersection";


export default function AboutTeam() {
  const t = useTranslations("AboutTeam")
  const t2 = useTranslations("AboutTeam.Items")
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  const items = [
    {
      name: t2("name"),
      position: t2("position"),
    },
    {
      name: t2("secoundname"),
      position: t2("secoundposition"),
    },
    {
      name: t2("thirdname"),
      position: t2("thirdposition"),
    },
    {
      name: t2("fourthname"),
      position: t2("fourthposition"),
    },
    {
      name: t2("fifthname"),
      position: t2("fifthposition"),
    },
    {
      name: t2("sixthname"),
      position: t2("sixthposition"),
    },
    {
      name: t2("seventhname"),
      position: t2("seventhposition"),
    },
  ]

  return (
    <TeamSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <TeamContainer>
        <TeamTitle isVisible={isVisible}>
          {t("title")}
        </TeamTitle>
        <TeamList>
          {
            items.map((item, index) => (
              <TeamItem style={{
                transform: `scale(${isVisible ? '1' : '0'})`,
                opacity: `${isVisible ? '1' : '0'}`,
                transition: `transform ${index * 0.1 + 1}s ease 0s, opacity 0.5s ease ${index * 0.1 + 0.7}s`
              }}
                key={index}
                isVisible={isVisible}>
                <TeamImg
                  src={images[index]?.src}
                  alt={images[index]?.alt}
                  width={100}
                  height={100}
                />
                <TeamName>
                  {item?.name}
                </TeamName>
                <TeamPosition>
                  {item?.position}
                </TeamPosition>
              </TeamItem>
            ))
          }
        </TeamList>
      </TeamContainer>
    </TeamSection>
  )
}