import Featured from "@/components/home/featured";
import HomeHero from "@/components/home/homeHero";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <Featured/>
    </main>
  );
};

export default HomePage;
