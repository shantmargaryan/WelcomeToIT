import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturesItems from "@/components/FeaturesItems";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export const metadata = {
  title: "Features",
};
export default function FeaturesPage() {
  const t = useTranslations("FeaturesHero");

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero
          title={t("title")}
          description={t("description")}
          img="/imgs/FeatureHero.png"
          link={t("link")}
        />
        <Benefits />
        <FeaturesItems />
      </Suspense>
    </>
  )
}