import type { Metadata } from "next";

import Hero from "./_components/Hero";
import RealData from "./_components/RealData";
import Showcase from "./_components/Showcase";
import LatestArticles from "./_components/LatestArticles";
import LatestReviews from "./_components/LatestReviews";
import NodebenchMarkAnnouncement from "./_components/NodebenchMark";

export const metadata: Metadata = {
  title: "Benchmarks and Reviews - nodebench",
  description: "nodebench is a website that provides benchmarks and reviews for various hardware components.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestArticles />
      <LatestReviews />
      <RealData />
      <NodebenchMarkAnnouncement />
      <Showcase />
    </main>
  );
}
