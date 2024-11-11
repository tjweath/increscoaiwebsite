import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Clients />
      <FAQ />
    </div>
  );
};

export default Index;