"use client";
import { HomeWorkSection, HomeWorkContainer, HomeWorkContent, HomeWorkTitle, HomeWorkParagraph, HomeWorkLink, List, CounterNumber, ListItem, SmallTitle, SmallParagraph } from "./styled";
import { MoveRight as ArrowRight } from "lucide-react";
import { Icon } from "@/Utils/Icon";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import IntersectionComponent from "@/Utils/Intersection";

export default function HomeWork() {
  const t = useTranslations("HomeWork");
  const t2 = useTranslations("HomeWork.Items");
  const [homeWorkItems, setHomeWorkItems] = useState([]);
  const [isvisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is cached in sessionStorage
        const cachedData = sessionStorage.getItem("homeWorkItems");
        if (cachedData) {
          setHomeWorkItems(JSON.parse(cachedData));
          return;
        }

        // Fetch data from the API if not cached
        const data = await fetch("/api/homeWorksItems");
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const { homeWorkItems: items } = await data.json();

        // Cache the data in sessionStorage
        sessionStorage.setItem("homeWorkItems", JSON.stringify(items));
        setHomeWorkItems(items);
      } catch (error) {
        console.error("Error fetching work items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeWorkSection isvisible={isvisible ? "true" : undefined}>
      <IntersectionComponent onIntersect={handleIntersect} />
      <HomeWorkContainer>
        <HomeWorkContent>
          <HomeWorkTitle>
            {t("title")}
          </HomeWorkTitle>
          <HomeWorkParagraph>
            {t("description")}
          </HomeWorkParagraph>
          <HomeWorkLink href="#contact">
            {t("link")}
            <ArrowRight />
          </HomeWorkLink>
        </HomeWorkContent>

        <List>
          {homeWorkItems.map(({ id, title, description }) => (
            <ListItem key={id}>
              <CounterNumber>
                <Icon icon="pointer" />
              </CounterNumber>
              <SmallTitle>{t2(title)}</SmallTitle>
              <SmallParagraph>{t2(description)}</SmallParagraph>
            </ListItem>
          ))}
        </List>

      </HomeWorkContainer>
    </HomeWorkSection>
  );
}
