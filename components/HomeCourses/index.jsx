"use client";
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import svg from "./svg"
import {
  HomecoursesSection,
  HomecoursesContainer,
  HomecoursesTitle,
  HomecoursesParagraph,
  HomecoursesList,
  HomecoursesItem,
  HomecoursesContent,
  HomecoursesSmallTitle,
  HomecoursesDescription,
  HomecoursesLink
} from './styled';
import IntersectionComponent from '@/Utils/Intersection';


const HomeCourses = () => {
  const t = useTranslations('HomeCourses');
  const t2 = useTranslations('HomeCourses.Items');
  const [courses, setCourses] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/HomeCourses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <HomecoursesSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <HomecoursesContainer>
        <HomecoursesContent isVisible={isVisible}>
          <HomecoursesTitle>{t('title')}</HomecoursesTitle>
          <HomecoursesParagraph>{t('description')}</HomecoursesParagraph>
        </HomecoursesContent>
        <HomecoursesList>
          {courses.map((courses, index) => (
            <HomecoursesItem style={{
              transform: `scale(${isVisible ? '1' : '0'})`,
              opacity: `${isVisible ? '1' : '0'}`,
              transition: `transform ${index * 0.1 + 1}s ease 0s, opacity 0.5s ease ${index * 0.1 + 0.7}s`
            }} key={courses.id}
              isVisible={isVisible}>
              <Image
                src={svg[courses.id - 1].path}
                alt={t2(courses.title)}
                width={100}
                height={100}
              />
              <HomecoursesSmallTitle>{t2(courses.title)}</HomecoursesSmallTitle>
              <HomecoursesDescription>{t2(courses.description)}</HomecoursesDescription>
              <HomecoursesLink href="/courses">
                {t2(courses.link)}
              </HomecoursesLink>
            </HomecoursesItem>
          ))}
        </HomecoursesList>
      </HomecoursesContainer>
    </HomecoursesSection>
  );
}

export default HomeCourses;