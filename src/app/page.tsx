import Featured from "@/components/home/featured";
import HomeHero from "@/components/home/homeHero";
import JustDoIt from "@/components/home/justDoIt";
import LatestCollection from "@/components/home/latestCollection";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <JustDoIt/>
      <Featured/>
      <LatestCollection/>
    </main>
  );
};

export default HomePage;
