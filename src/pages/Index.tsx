import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { Timeline } from "@/components/site/Timeline";
import { Founder } from "@/components/site/Founder";
import { Partners } from "@/components/site/Partners";
import { Platform } from "@/components/site/Platform";
import { International } from "@/components/site/International";
import { Testimonials } from "@/components/site/Testimonials";
import { VideoTestimonials } from "@/components/site/VideoTestimonials";
import { Footer } from "@/components/site/Footer";
import { LittleCip } from "@/components/site/LittleCip";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Timeline />
        <Founder />
        <Partners />
        <Platform />
        <International />
        <VideoTestimonials />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
