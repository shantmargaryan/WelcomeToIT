"use client";
import {
  CoursesSection,
  CoursesContainer,
  ImgContent,
  TeacherBox,
  TeacherName,
  TeacherPosition,
  TeacherImg,
  CoursesContent,
  CoursesCurrentTitle,
  CoursesCurrentDescription,
  CoursesImg,
  CoursesBefourTitle,
  CoursesTitle,
  CoursesDescription,
  CoursesList,
  CoursesItem,
  CoursesLink
} from "./styled";
import { useTranslations } from "next-intl";
import { Link } from '@/i18n/navigation';
import { useState, useEffect } from "react";
import IntersectionComponent from "@/Utils/Intersection";

export default function Courses() {
  const t2 = useTranslations("CoursesItems");
  const [courses, setCourses] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/CoursesItems");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <CoursesSection>
      <IntersectionComponent onIntersect={handleIntersect} />
      <CoursesContainer>
        <CoursesContent isVisible={isVisible}>
          <CoursesCurrentTitle>{t2("currentTitle")}</CoursesCurrentTitle>
          <CoursesCurrentDescription>{t2("currentDescription")}</CoursesCurrentDescription>
        </CoursesContent>
        <CoursesList>
          {courses.map((course, index) => (
            <CoursesItem style={{
              transform: `scale(${isVisible ? '1' : '0'})`,
              opacity: `${isVisible ? '1' : '0'}`,
              transition: `transform ${index * 0.1 + 1}s ease 0s, opacity 0.5s ease ${index * 0.1 + 0.7}s`
            }} key={course.id}
              isVisible={isVisible}>
              <ImgContent>
                {course.teacherImg &&
                  <TeacherImg
                    src={course.teacherImg}
                    alt={course.teacherName}
                    width={50}
                    height={50}
                  />
                }
                <TeacherBox>
                  <TeacherName>
                    {t2(course.teacherName) || " "}
                  </TeacherName>
                  <TeacherPosition>
                    {t2(course.teacherPosition) || " "}
                  </TeacherPosition>
                </TeacherBox>
              </ImgContent>
              <Link href={`/courses/${course?.id}`}>
                <CoursesImg
                  isVisible={isVisible}
                  src={course.img}
                  alt="course image"
                  width={500}
                  height={300}
                  style={{
                    height: '350px',
                  }}
                />
              </Link>
              <CoursesBefourTitle>
                {t2(course.befourTitle)}
              </CoursesBefourTitle>
              <CoursesTitle>{t2(course.title)}</CoursesTitle>
              <CoursesDescription>{t2(course.description)}</CoursesDescription>
              <CoursesLink href={`/courses/${course?.id}`}>
                {t2(course.link)}
              </CoursesLink>
            </CoursesItem>
          ))}
        </CoursesList>
      </CoursesContainer>
    </CoursesSection>
  );
}