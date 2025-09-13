import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import ResourcesSection from "@/components/ResourcesSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DashboardSection />
        <ResourcesSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
