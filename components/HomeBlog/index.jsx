import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Imgs } from "./images";
import { ArrowRight } from "lucide-react";
import { BlogSection, BlogContainer, BlogTitle, List, Item, ItemTitle, ItemParagraph, BlogImg, ReadMore } from "./styled";


export default async function HomeBlog() {
  const t = useTranslations("HomeBlogItems");

  // Check if data is cached in sessionStorage
  let homeBlog = [];
  const cachedData = sessionStorage.getItem("homeBlog");
  if (cachedData) {
    homeBlog = JSON.parse(cachedData);
  } else {
    // Fetch data from the API if not cached
    const data = await fetch("/api/homeBlog");
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const response = await data.json();
    homeBlog = response.homeBlog;

    // Cache the data in sessionStorage
    sessionStorage.setItem("homeBlog", JSON.stringify(homeBlog));
  }

  return (
    <BlogSection>
      <BlogContainer>
        <BlogTitle>
          {t("currentTitle")}
        </BlogTitle>
        <List>
          {
            homeBlog?.map(({ id, title, description }) => (
              <Item key={id}>
                <Link href="#">
                  <BlogImg
                    src={Imgs[id - 1].path}
                    alt={Imgs[id - 1].alt}
                    width={700}
                    height={700}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Link>
                <ItemTitle>
                  {t(title)}
                </ItemTitle>
                <ItemParagraph>
                  {t(description)}
                </ItemParagraph>
                <ReadMore href="#">
                  {t("link")}
                  <ArrowRight />
                </ReadMore>
              </Item>
            ))
          }
        </List>
      </BlogContainer>
    </BlogSection>
  );
}