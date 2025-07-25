import AboutHero from "@/components/AboutHero";
import AboutWhoWeAre from "@/components/AboutWhoWeAre";
import AboutFollow from "@/components/AboutFollow";
import AboutOurMission from "@/components/InfiniteMarquee";
import Benefits from "@/components/Benefits";
import AboutTeam from "@/components/AboutTeam";
import { Suspense } from "react";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutHero />
        <AboutWhoWeAre />
        <AboutFollow />
        <AboutOurMission />
        <Benefits />
        <AboutTeam />
      </Suspense>
    </>
  );
}
