import Hero from "@/components/Hero";
import HomeWork from "@/components/HomeWork";
import HomeProject from "@/components/HomeProject";
import HomeCourses from "@/components/HomeCourses";
import HomeFeatures from "@/components/HomeFeatures";
import HomeClients from "@/components/HomeClients";
import ContactForm from "@/components/ContactForm";
import HomeBlog from "@/components/HomeBlog";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomeHero");
  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        img="/imgs/GroupImg.jpg"
        link={t("link")}
        href="/about"
      />
      <HomeWork />
      <HomeProject />
      <HomeCourses />
      <HomeFeatures />
      {/* <HomeClients /> */}
      <ContactForm />
      {/* <HomeBlog /> */}
    </>
  );
}
