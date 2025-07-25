"use client";
import SingleProjectHero from "@/components/SecoundHero";
import ProjectInfo from "@/components/ProjectInfo";
import AboutProject from "@/components/AboutProject";
import { useEffect, useState, Suspense } from "react";
import { use } from "react";
import { useTranslations } from "next-intl";


export default function SinglePage({ params }) {
  const t = useTranslations("SingleProjectHero");
  const [projects, setProjects] = useState([]);
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/posts");
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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SingleProjectHero
          beforeTitle={t("beforeTitle")}
          title={t("title")}
          description={t("description")}
        />
        <ProjectInfo
          id={id}
          img={project?.path}
          alt="project"
          language={project?.language}
          development={project?.development}
          price={project?.price}
        />
        <AboutProject
          {...project}
        />
      </Suspense>
    </>
  );
}