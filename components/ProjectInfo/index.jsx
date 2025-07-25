"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ProjectInfoWrapper, ProjectInfoImg, ProjectInfoContainer, ProjectInfoList, ProjectInfoListItem, ProjectInfoTitle, ProjectInfoSpan } from "./styled";
export default function ProjectInfo({ img, alt }) {
  const t = useTranslations("ProjectsItems");
  const t2 = useTranslations("ProjectsItems.ProjectAboutInfo");
  const items = [
    "language",
    "development",
    "price"
  ]
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <ProjectInfoWrapper>
      <ProjectInfoContainer>
        {img && (
          <ProjectInfoImg src={img}
            alt={alt}
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
            onLoad={() => setImageLoading(false)}
            imageLoading={imageLoading}
            priority={false}
          />
        )}
        <ProjectInfoList>
          {
            items.map((item) => (
              <ProjectInfoListItem
                key={item}>
                <ProjectInfoTitle>
                  {t2(item)}
                </ProjectInfoTitle>
                <ProjectInfoSpan>
                  {t(item)}
                </ProjectInfoSpan>
              </ProjectInfoListItem>
            ))
          }
        </ProjectInfoList>
      </ProjectInfoContainer>
    </ProjectInfoWrapper>
  )
}