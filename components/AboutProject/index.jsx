"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AboutProjectWrapper, AboutProjectContainer, AboutProjectTitle, AboutProjectParagraph, AboutProjectList, AboutProjectListItem } from "./styled";
export default function AboutProject({ id, imgUrl, alt }) {
  const t = useTranslations("ProjectAbout");
  const [imageLoading, setImageLoading] = useState(true);
  const items = [
    "firstSmallText",
    "secondSmallText",
    "thirdSmallText"
  ]

  if (!id) return null;

  return (
    <AboutProjectWrapper>
      <AboutProjectContainer>
        <AboutProjectTitle>
          {t("title")}
        </AboutProjectTitle>
        <AboutProjectParagraph>
          {t(`items.${id}.description`)}
        </AboutProjectParagraph>
        <AboutProjectList>
          {
            items.map((item) => (
              <AboutProjectListItem key={item}>
                <AboutProjectParagraph>
                  {t(`items.${id}.${item}`)}
                </AboutProjectParagraph>
              </AboutProjectListItem>
            ))}
        </AboutProjectList>
        <Image src={imgUrl}
          alt={alt}
          width={700}
          height={700}
          style={{ width: '100%', height: 'auto' }}
          onLoad={() => setImageLoading(false)}
          imageLoading={imageLoading}
          priority={false}
        />
      </AboutProjectContainer>
    </AboutProjectWrapper>
  )
}