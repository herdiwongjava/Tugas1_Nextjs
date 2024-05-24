import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ContentCat from "@/components/content.-cat";
import FooterBar from "@/components/footbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ContentCat />
      <FooterBar />
    </main>
  );
}