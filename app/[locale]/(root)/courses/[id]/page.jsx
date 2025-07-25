"use client";
import SingleCourseHero from "@/components/SecoundHero";
import SingleInfo from "@/components/SingleInfo";
import { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";



export default function SingleCoursePage() {
  const [projects, setProjects] = useState([]);
  const params = useParams();
  const { id } = params;
  const t = useTranslations("CoursesSingleHero");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/CoursesItems");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [])

  const project = projects.find((post) => +post.id === +id);


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleCourseHero
        beforeTitle={t("beforeTitle")}
        title={t("title")}
        description={t("description")}
      />
      <SingleInfo
        id={id}
        title={project?.title}
        description={project?.description}
        largeDescription={project?.largeDescription}
        image={project?.img}
        items={project?.items}
      />
    </Suspense>
  );
}