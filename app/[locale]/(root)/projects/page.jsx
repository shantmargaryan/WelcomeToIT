"use client";
import ProjectsHero from "@/components/SecoundHero";
import ProjectsItems from "@/components/ProjectsItems";
import { useEffect, useState, Suspense } from "react";
import { useTranslations } from "next-intl";



export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const t = useTranslations("ProjectsHero");

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

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsHero
          title={t("title")}
          description={t("description")}
        />
        <ProjectsItems posts={projects} />
      </Suspense>
    </>
  );
}