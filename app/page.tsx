"use client";

import SiteHeader from "@/components/site-header";
import CinematicHome from "@/components/cinematic-home";

export default function Home() {
  return (
    <main className="home-new cinematic-page">
      <SiteHeader />
      <CinematicHome />
    </main>
  );
}
