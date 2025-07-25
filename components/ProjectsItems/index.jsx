"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";
import { MoveRight as ArrowRight } from "lucide-react";
import { Images } from "./images";
import SearchBar from "@/components/SearchBar";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsTitle,
  List,
  Item,
  SmallTitle,
  TitleLink,
  Link,
  Page,
  Language,
  Development,
  ProjectsImg,
  ImgLink,
  Price,
  LoadMoreButton
} from "./styled";
import IntersectionComponent from "@/Utils/Intersection";

export default function ProjectsItems({ posts }) {
  const t = useTranslations("ProjectsItems");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPosts = posts?.filter(post => {
    const searchLower = searchTerm.toLowerCase();
    return (
      t(post?.title).toLowerCase().includes(searchLower) ||
      t(post?.language).toLowerCase().includes(searchLower) ||
      t(post?.development).toLowerCase().includes(searchLower) ||
      t(post?.page).toLowerCase().includes(searchLower)
    );
  });

  const hasMorePosts = visiblePosts < filteredPosts?.length;

  return (
    <ProjectsSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <ProjectsContainer>
        <ProjectsTitle isVisible={isVisible}>
          {t("currentTitle")}
        </ProjectsTitle>
        <SearchBar
          onSearch={handleSearch} />
        <List>
          {
            filteredPosts?.slice(0, visiblePosts).map((post) => (
              <Item key={post.id}
                isVisible={isVisible}>
                <ImgLink href={`/projects/${post?.id}`}>
                  <Page>
                    {t(post?.page)}
                  </Page>
                  <ProjectsImg
                    src={Images[post?.id - 1]?.path}
                    alt={Images[post?.id - 1]?.alt}
                    width={700}
                    height={700}
                    style={{ width: '100%', height: 'auto' }}
                    priority={false}
                  />
                </ImgLink>
                <SmallTitle>
                  <TitleLink href={`/projects/${post?.id}`}>
                    {t(post?.title)}
                  </TitleLink>
                </SmallTitle>
                <Language>
                  {t(post?.language)}
                </Language>
                <Development>
                  {t(post?.development)}
                </Development>
                <Link href={post?.href} target="_blank">
                  {t("viewMore")}
                  <ArrowRight />
                </Link>
              </Item>
            ))}
        </List>
        {
          hasMorePosts && (
            <LoadMoreButton
              onClick={loadMore}
            >
              {t("loadMore")}
              <ArrowRight size={20} />
            </LoadMoreButton>
          )}
      </ProjectsContainer>
    </ProjectsSection>
  );
}