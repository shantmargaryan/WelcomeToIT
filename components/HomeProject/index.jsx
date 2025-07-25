"use client"
import { useTranslations } from "next-intl";
import { MoveRight as ArrowRight } from "lucide-react";
import { ProjectSection, ProjectContainer, Wrapper, Content, ProjectTitle, ViewMore, ProjectImg } from "./styled";
import { useState, useEffect } from "react";
import IntersectionComponent from "@/Utils/Intersection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import "swiper/css";
import Link from "next/link";

SwiperCore.use([Autoplay]);

export default function HomeProject() {
  const t = useTranslations("HomeProjects");
  const [isVisible, setisVisible] = useState(false);
  const [project, setProject] = useState([]);

  const handleIntersect = () => {
    setisVisible(true);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/HomeProject');
        const data = await response.json();
        console.log('Setting project data:', data);
        setProject(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <ProjectContainer>
        <Content>
          <ProjectTitle isVisible={isVisible}>
            {t("title")}
          </ProjectTitle>
          <ViewMore href="/projects" isVisible={isVisible}>
            {t("link")}
            <ArrowRight />
          </ViewMore>
        </Content>
        <Wrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
          >
            {
              project?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={item.href}>
                    <ProjectImg src={item?.img}
                      alt={item.alt}
                      width={700}
                      height={700}
                    />
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Wrapper>
      </ProjectContainer>
    </ProjectSection>
  );
}