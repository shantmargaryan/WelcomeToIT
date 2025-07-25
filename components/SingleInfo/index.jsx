"use client"
import { useTranslations } from "next-intl";
import {
  SingleInfoSection,
  SingleInfoContainer,
  SingleInfoTitle,
  SingleInfoParagraph,
  SingleInfoLargParagraph,
  SingleInfoImg,
  Item
} from "./styled";

export default function SingleInfo({ id, title = "", description = "", image = "", largeDescription = "", items = [] }) {
  const t = useTranslations("CoursesItems");
  const t2 = useTranslations("CoursesItems.Items");

  const listItems = [
    "itemOne",
    "itemTwo",
    "itemThree",
  ];

  return (
    <SingleInfoSection>
      <SingleInfoContainer>
        {image && (
          <SingleInfoImg src={image} alt={title} width={500} height={300} />
        )}
        <SingleInfoTitle>{title && t(title)}</SingleInfoTitle>
        <SingleInfoParagraph>{description && t(description)}</SingleInfoParagraph>
        <SingleInfoLargParagraph>{largeDescription && t(largeDescription)}</SingleInfoLargParagraph>
        <ul>
          {listItems.map((item, index) => (
            <Item key={index}>
              <SingleInfoParagraph>
                {id ? t2(`${id}.${item}`) : ""}
              </SingleInfoParagraph>
            </Item>
          ))}
        </ul>
      </SingleInfoContainer>
    </SingleInfoSection >
  );
}