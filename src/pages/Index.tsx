import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Team />
      <Vision />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
