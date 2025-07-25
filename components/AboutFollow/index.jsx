"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  FollowSection,
  FollowContainer,
  FollowTitle,
  List,
  Item,
  FollowImg,
  Decoration,
  SmallTitle
} from "./styled";
import IntersectionComponent from "@/Utils/Intersection";



export default function AboutFollow() {
  const t = useTranslations("AboutFollow");
  const t2 = useTranslations("AboutFollow.Items");
  const [aboutFollow, setAboutFollow] = useState([]);
  const [isvisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/aboutFollow");
        const { aboutFollow } = await data.json();
        setAboutFollow(aboutFollow);
      } catch (error) {
        console.error("Error fetching aboutFollow:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <FollowSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <FollowContainer>
        <FollowTitle isVisible={isvisible}>
          {t("title")}
        </FollowTitle>
        <List>
          {aboutFollow?.map((item) => (
            <Item key={item.id}
              isVisible={isvisible}>
              <FollowImg src="/svg/LineIcon.svg" alt="icons"
                width={700}
                height={700}
                priority={false}
              />
              <SmallTitle>
                {t2(item?.title)}
              </SmallTitle>
              <Decoration>
                {t2(item?.description)}
              </Decoration>
            </Item>
          ))}
        </List>
      </FollowContainer>
    </FollowSection>
  )
}